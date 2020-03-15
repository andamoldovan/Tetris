import React from 'react';
import logo from './logo.svg';
import './App.css';
import Block from './components/component_constructs/Block';
import IShape from './components/pieces/IShape';
import JShape from "./components/pieces/JShape";
import OShape from "./components/pieces/OShape";
import LShape from './components/pieces/LShape';
import TShape from "./components/pieces/TShape";
import TwoPieceShape from "./components/component_constructs/TwoPieceShape";
import ZShape from "./components/pieces/ZShape";
import SShape from "./components/pieces/SShape";
import DropScreen from "./components/board/DropScren";
import MainScreen from "./components/board/MainScreen";

function App() {
  return (
    <div className="App">
      <MainScreen />
    </div>
  );
}

export default App;
