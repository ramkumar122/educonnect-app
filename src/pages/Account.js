import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Account() {
    const [selectedInterests, setSelectedInterests] = useState(
        JSON.parse(localStorage.getItem("userInterests")) || []
    );
    const [allInterests] = useState([
        "Mathematics",
        "Science",
        "History",
        "Programming",
        "Art",
        "Language Learning",
        "Music",
        "Physics",
        "Biology",
        "Literature",
    ]);
    const navigate = useNavigate();

    const handleInterestChange = (interest) => {
        setSelectedInterests((prev) =>
            prev.includes(interest)
                ? prev.filter((item) => item !== interest)
                : [...prev, interest]
        );
    };

    const saveInterests = () => {
        localStorage.setItem("userInterests", JSON.stringify(selectedInterests));
        alert("Interests updated successfully!");
    };

    const handleLogout = () => {
        localStorage.clear();
        alert("You have logged out.");
        navigate("/login");
    };

    return (
        <div className="account-container">
            <h2>My Account</h2>
            <div className="account-section">
                <h4>Select Your Interests</h4>
                <div className="interest-options">
                    {allInterests.map((interest) => (
                        <div key={interest} className="form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id={interest}
                                checked={selectedInterests.includes(interest)}
                                onChange={() => handleInterestChange(interest)}
                            />
                            <label htmlFor={interest} className="form-check-label">
                                {interest}
                            </label>
                        </div>
                    ))}
                </div>
                <button className="btn btn-primary mt-3" onClick={saveInterests}>
                    Save Interests
                </button>
            </div>

            <div className="account-section mt-4">
                <button className="btn btn-danger" onClick={handleLogout}>
                    Logout
                </button>
            </div>
        </div>
    );
}

export default Account;
