import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ProviderSettingMinesweeper } from './provider/ProviderSettingMinesweeper';
import { ProviderSideBar } from './sidebar/ProviderSideBarController';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <ProviderSideBar>
    <ProviderSettingMinesweeper>
      <App />
    </ProviderSettingMinesweeper>
  </ProviderSideBar>
  // </React.StrictMode>
)
