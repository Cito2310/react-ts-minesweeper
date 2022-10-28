import { useState, useContext } from 'react';

import { TopBar } from './top-bar/TopBar';
import { SideBar } from './sidebar/SideBar';
import { GameMinesweeper } from './minesweeper-game/GameMinesweeper';

import "./styles/main-style.scss"

function App() {
  return (
    <div className="App">
      <TopBar/>
      <SideBar/>

      <GameMinesweeper />
    </div>
  )
}

export default App
