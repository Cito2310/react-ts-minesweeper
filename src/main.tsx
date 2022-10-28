import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { ProviderSideBar } from './sidebar/ProviderSideBarController';
import { ProviderMinesweeper } from './minesweeper-game/ProviderMinesweeper';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <ProviderSideBar>
    <ProviderMinesweeper>
      <App />
    </ProviderMinesweeper>
  </ProviderSideBar>
  // </React.StrictMode>
)
