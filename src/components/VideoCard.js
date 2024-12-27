import React from 'react';
import './VideoCard.css';

const VideoCard = ({ title, thumbnail }) => {
    return (
        <div className="video-card">
            <img src={thumbnail} alt={title} />
            <h3>{title}</h3>
        </div>
    );
};

export default VideoCard;
