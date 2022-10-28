import { createContext, useState } from 'react';
import { IGridMinesweeper } from '../form-config-grid/FormConfigGrid';


export interface IMinesweeper {
    mines: number,
    sumMines: () => void,
    subMines: () => void,
    height: number,
    width: number,
}
export const contextGridConfig = createContext<IMinesweeper>({} as IMinesweeper)

interface props { children: JSX.Element | JSX.Element[] }
export const ProviderMinesweeper = ({children}: props) => {
    let gridDefaultConfig: IGridMinesweeper = {mines: 30, height: 30, width: 20}
    if (localStorage.getItem("grid-config")) {
        gridDefaultConfig = JSON.parse(localStorage.getItem("grid-config") || "{}")
    }

    const {mines: bomb, width, height}: IGridMinesweeper = gridDefaultConfig;

    const [mines, setMines] = useState(bomb);
    const sumMines = (): void => {setMines(mines+1)}
    const subMines = (): void => {setMines(mines-1)}

    return (
        <contextGridConfig.Provider value={{sumMines, subMines, mines, width, height}}>
            {children}
        </contextGridConfig.Provider>
    )
}