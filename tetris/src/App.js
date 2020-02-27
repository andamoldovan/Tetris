import React from 'react';
import logo from './logo.svg';
import './App.css';
import Block from './components/pieces/Block';
import IShape from './components/pieces/IShape';
import JShape from "./components/pieces/JShape";
import OShape from "./components/pieces/OShape";

function App() {
  return (
    <div className="App">
      <OShape />
    </div>
  );
}

export default App;
