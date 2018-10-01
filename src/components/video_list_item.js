import React from 'react';
import moment from 'moment';

const VideoListItem = ({video, onVideoSelect}) => {
    // const video = props.video;

    const info = {
        image: video.snippet.thumbnails.default.url,
        title: video.snippet.title,
        channel: video.snippet.channelTitle,
        date: moment(video.snippet.publishedAt).format('MM/YYYY')
    }

    console.log(video);

    return (
        <li 
            onClick={() => onVideoSelect(video)} 
            className="list-group-item videoSelect">
            <div className="video-list media">
                <div className="media-left">
                    <img 
                        className="media-object" 
                        src={info.image} 
                        alt={info.title} />
                </div>
                <div className="media-body">
                    <div className="media-heading bold vidTitle">{info.title}</div>
                    <p className="vidInfo">
                        <em>{info.channel}, {info.date}</em>
                    </p>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;