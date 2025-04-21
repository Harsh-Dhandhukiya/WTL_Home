import React from 'react';
import './UserCard.css';

const UserCard = ({ user, onDelete }) => {
  return (
    <div className="user-card">
      <button className="delete-button" onClick={onDelete}>
        ✕
      </button>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <p>Age: {user.age}</p>
    </div>
  );
};

export default UserCard;