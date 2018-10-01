import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    const VideoItems = props.videos.map((video) => {
        return (
            <VideoListItem 
                video={video} 
                key={video.etag} 
                onVideoSelect = {props.onVideoSelect} />
        );
    })

    return (
        <ul className="list-group col-md-4">
            {VideoItems}
        </ul>
    );
}

export default VideoList;