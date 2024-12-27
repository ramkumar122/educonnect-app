// Interests.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Interests = () => {
    const [selectedInterests, setSelectedInterests] = useState([]);
    const navigate = useNavigate();
    const interestsList = [
        'Science',
        'Technology',
        'Mathematics',
        'Literature',
        'Music',
        'History',
        'Art',
    ];

    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser) {
            const users = JSON.parse(localStorage.getItem('users')) || [];
            const user = users.find((user) => user.email === currentUser.email);
            if (user?.interests) {
                setSelectedInterests(user.interests);
            }
        }
    }, []);

    const toggleInterest = (interest) => {
        setSelectedInterests((prev) =>
            prev.includes(interest)
                ? prev.filter((i) => i !== interest)
                : [...prev, interest]
        );
    };

    const saveInterests = () => {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));

        if (currentUser) {
            const updatedUsers = users.map((user) =>
                user.email === currentUser.email
                    ? { ...user, interests: selectedInterests }
                    : user
            );
            localStorage.setItem('users', JSON.stringify(updatedUsers));
            alert('Interests saved successfully!');
            navigate('/');
        } else {
            alert('No user logged in.');
        }
    };

    return (
        <div>
            <h2>Select Your Interests</h2>
            <div className="interest-grid">
                {interestsList.map((interest) => (
                    <button
                        key={interest}
                        className={`interest-button ${
                            selectedInterests.includes(interest) ? 'selected' : ''
                        }`}
                        onClick={() => toggleInterest(interest)}
                    >
                        {interest}
                    </button>
                ))}
            </div>
            <button className="save-button" onClick={saveInterests}>
                Save Interests
            </button>
        </div>
    );
};

export default Interests;
