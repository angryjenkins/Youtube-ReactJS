import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YouTubeSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
// const YOUTUBE_API_KEY = 'AIzaSyBXu_yk8KUve9mHHk20jh3wAU7olb_maoo';



// create a new component that produces some HTML

 class App extends Component {
     constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
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

     render() {
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 800);

        return (
            <div>
                <SearchBar onSearchTermChange={(term) => this.videoSearch(term)}/>
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                    videos={this.state.videos}
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})} />
            </div>
        );
    }
 }

// tae the generated HTML and render in the DOM
ReactDOM.render(<App />, document.querySelector('.row'));
