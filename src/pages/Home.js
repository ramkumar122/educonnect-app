// Home.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css';

const Home = () => {
    const [videos, setVideos] = useState([]);
    const [userInterests, setUserInterests] = useState([]);

    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find((user) => user.email === currentUser?.email);

        if (user?.interests?.length > 0) {
            setUserInterests(user.interests);
            fetchRecommendedVideos(user.interests);
        } else {
            alert('Please set your interests in the "My Account" page.');
        }
    }, []);

    const fetchRecommendedVideos = async (interests) => {
        const API_KEY = 'AIzaSyBlkQbz8gvCHdNekdo-dyAaQaGDfWbaBPk'; // Replace with your API Key
        const promises = interests.map((interest) =>
            axios.get(
                `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${encodeURIComponent(
                    interest
                )}&key=${API_KEY}`
            )
        );

        const results = await Promise.all(promises);
        const videoData = results.flatMap((result) =>
            result.data.items.map((item) => ({
                id: item.id.videoId,
                title: item.snippet.title,
                thumbnail: item.snippet.thumbnails.medium.url,
            }))
        );

        setVideos(videoData);
    };

    return (
        <div className="home-page">
            <h2>Welcome to EduConnect</h2>
            <h3>Recommended Videos Based on Your Interests</h3>
            <div className="video-grid">
                {videos.map((video) => (
                    <div key={video.id} className="video-card">
                        <iframe
                            src={`https://www.youtube.com/embed/${video.id}`}
                            title={video.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                        <p>{video.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
