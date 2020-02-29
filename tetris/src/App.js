import React from 'react';
import logo from './logo.svg';
import './App.css';
import Block from './components/component_constructs/Block';
import IShape from './components/pieces/IShape';
import JShape from "./components/pieces/JShape";
import OShape from "./components/pieces/OShape";
import LShape from './components/pieces/LShape';

function App() {
  return (
    <div className="App">
      <JShape />
    </div>
  );
}

export default App;
