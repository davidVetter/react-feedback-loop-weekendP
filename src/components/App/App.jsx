import React from 'react';
import axios from 'axios';
import './App.css';
import FeedbackForm from '../FeedbackForm/FeedbackForm.jsx';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
        <FeedbackForm />
    </div>
  );
}

export default App;
