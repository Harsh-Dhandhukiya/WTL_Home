// App.js
import React, { useState } from 'react';
import './App.css';
import Lab8 from './Lab8';
import Lab9 from './Lab9';

function App() {
  const [selectedApp, setSelectedApp] = useState('Lab8');

  const renderApp = () => {
    switch (selectedApp) {
      case 'Lab8':
        return <Lab8 />;
      case 'Lab9':
        return <Lab9 />;
      default:
        return <div>Select an experiment</div>;
    }
  };

  return (
    <div className="container">
      <div className="sidebar">
        <h3 onClick={() => setSelectedApp('Lab8')}>Lab 8</h3>
        <h3 onClick={() => setSelectedApp('Lab9')}>Lab 9</h3>
      </div>
      <div className="main">
        {renderApp()}
      </div>
    </div>
  );
}

export default App;