import React from 'react';
import Routes from './components/routes';
import Header from './components/header';
import Series from './components/series';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
      <Series />
    </div>
  );
}

export default App;
