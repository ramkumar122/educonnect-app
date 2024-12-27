// Signup.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignup = () => {
        if (email && password) {
            const users = JSON.parse(localStorage.getItem('users')) || [];
            const existingUser = users.find((user) => user.email === email);

            if (existingUser) {
                alert('User already exists. Please log in.');
                navigate('/login');
                return;
            }

            users.push({ email, password, interests: [] });
            localStorage.setItem('users', JSON.stringify(users));
            localStorage.setItem('currentUser', JSON.stringify({ email }));

            alert('Signup successful! Please select your interests.');
            navigate('/interests'); // Redirect to Interests page
        } else {
            alert('Please fill in all fields!');
        }
    };

    return (
        <div>
            <h2>Signup</h2>
            <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleSignup}>Signup</button>
        </div>
    );
};

export default Signup;
