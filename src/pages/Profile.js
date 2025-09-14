import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import "../css/Profile.css";

const Profile = () => {
    const { user } = useAuth();
    const [formData, setFormData] = useState({
        name: user?.name || '',
        email: user?.email || '',
        phone: '',
        notifications: true
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Profile updated successfully!');
    };

    return (
        <div className="profile-page">
            <div className="container">
                <h1>Your Profile</h1>
                
                <div className="profile-content">
                    <div className="profile-card">
                        <h2>Personal Information</h2>
                        <form onSubmit={handleSubmit} className="profile-form">
                            <div className="form-group">
                                <label>Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your full name"
                                />
                            </div>
                            
                            <div className="form-group">
                                <label>Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email"
                                />
                            </div>
                            
                            <div className="form-group">
                                <label>Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Enter your phone number"
                                />
                            </div>
                            
                            <div className="form-group checkbox-group">
                                <label>
                                    <input
                                        type="checkbox"
                                        name="notifications"
                                        checked={formData.notifications}
                                        onChange={handleChange}
                                    />
                                    Receive email notifications
                                </label>
                            </div>
                            
                            <button type="submit" className="btn btn-primary">
                                Save Changes
                            </button>
                        </form>
                    </div>
                    
                    <div className="profile-sidebar">
                        <div className="preference-card">
                            <h3>Account Preferences</h3>
                            <button className="btn btn-outline">Change Password</button>
                            <button className="btn btn-outline">Privacy Settings</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;