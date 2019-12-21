import React from 'react';
import moment from 'moment';

const VideoDetail = ({ video }) => {
	//check to see if videos have loaded yet.
	if (!video) {
		return <div>Videos incoming, ...</div>;
	}
	// end check
	const ids = {
		channel: video.snippet.channelId,
		vid: video.id.videoId,
	};

	const parser = new DOMParser();

	const info = {
		channel: video.snippet.channelTitle,
		channelUrl: `https://www.youtube.com/channel/${ids.channel}`,
		url: `https://www.youtube.com/embed/${ids.vid}`,
		title: parser.parseFromString(
			`<!doctype html><body>${video.snippet.title}`,
			'text/html',
		).body.textContent,
		desc: parser.parseFromString(
			`<!doctype html><body>${video.snippet.description}`,
			'text/html',
		).body.textContent,
		date: moment(video.snippet.publishedAt).format('MMMM Do YYYY'),
	};

	return (
		<div className='video-detail col-md-8'>
			<div className='embed-responsive embed-responsive-16by9'>
				<iframe className='embed-responsive-item' src={info.url}></iframe>
			</div>
			<div className='details'>
				<div>
					<h2 className='vidTitle'>{info.title}</h2>
					<p className='vidInfo'>
						<em>
							Posted on <strong>{info.date}</strong> by{' '}
							<a href={info.channelUrl} target='_blank'>
								<strong>{info.channel}</strong>
							</a>
						</em>
					</p>
				</div>
				<div>
					<p className='vidInfo'>{info.desc}</p>
				</div>
			</div>
		</div>
	);
};

export default VideoDetail;
