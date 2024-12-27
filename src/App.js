// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Interests from './pages/Interests';
import MyAccount from './pages/Account';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/interests" element={<Interests />} />
                <Route path="/my-account" element={<MyAccount />} />
            </Routes>
        </Router>
    );
}

export default App;
