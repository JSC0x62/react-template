import React from 'react';
import logo from '../logo.svg';
import '../css/App.css';
import Header from '../components/Header/Header.js';

function App() {
  return (
    <div className="App">
      <Header url={'https://reactjs.org'} title={'Learn React'} />
    </div>
  );
}

export default App;
