import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YouTubeSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import Toggle from './components/Toggle';

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

// create a new component that produces some HTML

 class App extends Component {
     constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null,
            darkmode: false
        };

        this.videoSearch('hello world');
     }

     videoSearch(term) {
        YouTubeSearch({key: YOUTUBE_API_KEY, term: term}, (videos) => {
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0]
            });
        });
     }

     toggleDarkMode() {
         this.setState({ darkmode: !this.state.darkmode});
         if(this.state.darkmode === false){
             document.body.classList.add('darkmode');
         } else {
            document.body.classList.remove('darkmode');
         }

     }

     render() {
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 1200);
        return (
            <div>
                <div className="row">
                    <SearchBar 
                        onSearchTermChange={(term) => this.videoSearch(term)}
                    />
                    <Toggle 
                        onDarkModeToggle={() => this.toggleDarkMode()}
                    />
                </div>
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                    videos={this.state.videos}
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})} />
            </div>
        );
    }
 }

// tae the generated HTML and render in the DOM
ReactDOM.render(<App />, document.querySelector('#boundary'));
