import { GameMinesweeper } from './components/GameMinesweeper';
import { useState, useContext } from 'react';

import "./styles/main-style.scss"
import { SettingMinesweeperContext } from './provider/ProviderSettingMinesweeper';
import { MenuConfig } from './components/MenuConfig';
import { TopBar } from './top-bar/TopBar';
import { SideBar } from './sidebar/SideBar';

const mines = 2;

function App() {
  // const { mines } = useContext(SettingMinesweeperContext)

  // type Status = {win: boolean, lost: boolean}
  // const [status, setStatus] = useState<Status>({win: false, lost: false})
  // const [remainingBombs, setRemainingBombs] = useState<number>(mines)

  // const onStatusWin = (): void => {setStatus({...status, win: true})}
  // const onStatusLost = (): void => {setStatus({...status, lost: true})}

  return (
    <div className="App">
      <TopBar/>
      <SideBar/>
      {/* <MenuConfig /> */}
      {/* <div className='row-menu'>
        <div className='menu-section-title'>
          <h1>MINESWEEPER.ts</h1>
        </div>
        <div className='menu-section-config'>
          <h2>Minas restantes: {remainingBombs}</h2>
          <button><i className="fa-solid fa-bars"></i></button>
        </div>
      </div> */}
      
      {/* <GameMinesweeper 
        onStatusLost={onStatusLost} 
        onStatusWin={onStatusWin}
        setRemainingBombs={setRemainingBombs}
        remainingBombs={remainingBombs}
      /> */}

      {/* {status.win ? <h2>Ganaste, haz detectado todas las minas</h2> : undefined} */}
      {/* {status.lost ? <h2>Perdiste, haz explotado una mina</h2> : undefined} */}
    </div>
  )
}

export default App
