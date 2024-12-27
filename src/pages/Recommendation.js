import React from 'react';

const Recommendation = ({ videos }) => {
    return (
        <div>
            <h2>Recommended Videos</h2>
            <div className="video-grid">
                {videos.length === 0 ? (
                    <p>No recommendations available. Please select your interests.</p>
                ) : (
                    videos.map((video, index) => (
                        <div key={index} className="video-card">
                            <iframe
                                width="100%"
                                height="200"
                                src={`https://www.youtube.com/embed/${video.id.videoId}`}
                                title={video.snippet.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                            <p>{video.snippet.title}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Recommendation;
