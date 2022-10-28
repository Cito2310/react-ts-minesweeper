import { createContext, useState } from 'react';

interface ISettingMinesweeper { 
  width: number
  setWidth: React.Dispatch<React.SetStateAction<number>> 

  height: number
  setHeight: React.Dispatch<React.SetStateAction<number>> 

  mines: number
  setMines: React.Dispatch<React.SetStateAction<number>> 
}
export const SettingMinesweeperContext = createContext<ISettingMinesweeper>()

type Props = {children: React.ReactNode}
export const ProviderSettingMinesweeper: React.FC<Props> = ({ children }) => {
  const [width, setWidth] = useState<number>(10)
  const [height, setHeight] = useState<number>(10)
  const [mines, setMines] = useState<number>(10)

  return (
    <SettingMinesweeperContext.Provider value={{width, setWidth, height, setHeight, mines, setMines}}>
      {children}
    </SettingMinesweeperContext.Provider>
  )
}