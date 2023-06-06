import logo from './logo.svg';
import './App.css';
import React from 'react';
// import { isMobile } from "react-device-detect"

function App() {
  // mobile = ""
  
  // if( /Android/i.test(navigator.userAgent) ) {
  //   mobile = "Android";
  // }
  // if(/iPhone/i.test(navigator.userAgent) ) {
  //   mobile = "iPhone";
  // }
  // if(/iPad/i.test(navigator.userAgent) ) {
  //   mobile = "iPad";
  // }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Hello Jacob :-{'\)'}
        </h1>
        <p>
          {/* Edit <code>src/App.js</code> and save to reload. */}
          Welcome to 'TheWebsite'
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
