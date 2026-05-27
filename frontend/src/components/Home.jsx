import React from 'react';

const Home = ({ onLogout }) => {
  return (
    <div style={{ textAlign: 'center', marginTop: '20vh', fontFamily: 'sans-serif' }}>
      <h1 style={{ color: '#28a745' }}>You successfully logged in!</h1>
      <p style={{ fontSize: '1.2rem', color: '#555' }}>This is the Home Page.</p>
      <button 
        onClick={onLogout} 
        style={{ 
          marginTop: '20px', 
          padding: '10px 20px', 
          fontSize: '1rem', 
          backgroundColor: '#0066cc', 
          color: 'white', 
          border: 'none', 
          borderRadius: '4px', 
          cursor: 'pointer' 
        }}>
        Logout
      </button>
    </div>
  );
};

export default Home;
