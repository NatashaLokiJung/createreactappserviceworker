import React from 'react';
import logo from './logo.svg';
import './App.css';
import OneSignal from 'react-onesignal';

OneSignal.initialize('dc279a24-1fae-4f6e-b013-0438fc509fec', {
  safari_web_id: "web.onesignal.auto.459ab5a0-25ed-43f1-a7b1-99d986ce9992"
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
