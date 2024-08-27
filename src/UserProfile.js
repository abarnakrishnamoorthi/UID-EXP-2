// src/UserProfile.js
import React from 'react';
import PropTypes from 'prop-types';
import profilePic from './assets/image1.png'; // Ensure this path is correct

const UserProfile = ({ user }) => {
  return (
    <div className="user-profile">
      <div className="profile-details">
        <img src={profilePic} alt={`${user.name}'s profile`} className="profile-picture" />
        <h2>{user.name}</h2>
        <p>Email: {user.email}</p>
        <p>Age: {user.age}</p>
        <p>Occupation: {user.occupation}</p>
        <a href="https://example.com/software-development" target="_blank" rel="noopener noreferrer">
          Learn more about Software Development
        </a>
        <div className="social-links">
          <a href="https://github.com/abarnakrishnamoorthi" target="_blank" rel="noopener noreferrer" className="btn github">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/abarna-krishnamoorthi-320391259/" target="_blank" rel="noopener noreferrer" className="btn linkedin">
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

UserProfile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    occupation: PropTypes.string,
  }).isRequired,
};

export default UserProfile;
