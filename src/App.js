// src/App.js
import React from 'react';
import UserProfile from './UserProfile';
import './App.css';

const App = () => {
  const user = {
    name: 'ABARNA KRISHNAMOORTHI',
    email: 'abarnak.22it@kongu.eddu',
    age: 20,
    occupation: 'Software Developer', // Add this detail if needed
  };

  return (
    <div className="App">
      <UserProfile user={user} />
    </div>
  );
};

export default App;
