// src/Lab9.js
import React, { useState } from 'react';
import './Lab9.css';
import UserCard from './components/UserCard/UserCard';

function Lab9() {
  const [users, setUsers] = useState([
    { id: 1, name: 'Alex', email: 'alex.rechard@yahoo.com', age: 25 },
    { id: 2, name: 'Perl', email: 'p.shellows@shell.com.net', age: 23 },
    { id: 3, name: 'Rocky', email: 'l.doraldo@example.com', age: 28 }
  ]);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleAddUser = () => {
    if (formData.name && formData.email && formData.age) {
      const newUser = {
        id: users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 1,
        name: formData.name,
        email: formData.email,
        age: parseInt(formData.age)
      };
      
      setUsers([...users, newUser]);
      setFormData({ name: '', email: '', age: '' });
    }
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="app-container">
      <h1>User Profiles</h1>
      
      <div className="input-container">
        <input 
          type="text" 
          name="name" 
          placeholder="Name" 
          value={formData.name} 
          onChange={handleChange} 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Email" 
          value={formData.email} 
          onChange={handleChange} 
        />
        <input 
          type="number" 
          name="age" 
          placeholder="Age" 
          value={formData.age} 
          onChange={handleChange} 
        />
        <button className="add-button" onClick={handleAddUser}>Add User</button>
      </div>
      
      <div className="user-cards-container">
        {users.map(user => (
          <UserCard 
            key={user.id} 
            user={user} 
            onDelete={() => handleDeleteUser(user.id)} 
          />
        ))}
      </div>
    </div>
  );
}

export default Lab9;