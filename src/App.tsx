import { GameMinesweeper } from './components/GameMinesweeper';
import { useState } from 'react';

function App() {
  type Status = {win: boolean, lost: boolean}
  const [status, setStatus] = useState<Status>({win: false, lost: false})

  const onStatusWin = (): void => {setStatus({...status, win: true})}
  const onStatusLost = (): void => {setStatus({...status, lost: true})}

  return (
    <div className="App">
      <h1>MINESWEEPER</h1>
      
      <GameMinesweeper 
        width={10} 
        height={10} 
        mines={20} 
        onStatusLost={onStatusLost} 
        onStatusWin={onStatusWin}
      />

      {status.win ? <h2>Ganaste, haz detectado todas las minas</h2> : undefined}
      {status.lost ? <h2>Perdiste, haz explotado una mina</h2> : undefined}
    </div>
  )
}

export default App
