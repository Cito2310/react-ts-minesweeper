import { useContext, useEffect, useState } from 'react';

import { createGridMinesweeper, rowGrid } from './helpers/createGridMinesweeper';
import { cleanCurrentCell } from './helpers/cleanCurrentCell';
import { detectCellAround } from './helpers/detectCellAround';
import { cleanBagEmptyCells } from './helpers/cleanBagEmptyCells';
import { checkWin } from './helpers/checkWin';
import { checkRemainingCells } from './helpers/checkRemainingCells';

import { NumCell } from './NumCell';
import { BombCell } from './BombCell';
import { EmptyCell } from './EmptyCell';

import "./game-minesweeper.scss"
import { contextGridConfig, IMinesweeper } from './ProviderMinesweeper';

export const GameMinesweeper = () => {
    const {
        height, 
        mines, 
        subMines, 
        sumMines, 
        width
    } = useContext<IMinesweeper>(contextGridConfig)

    const [update, setUpdate] = useState<number>(0)
    const [gridMinesweeper, setGridMinesweeper] = useState<rowGrid[]>([[]])
    const [remainingCells, setRemainingCells] = useState<number>()
    useEffect(() => { setGridMinesweeper(createGridMinesweeper(height, width, mines)) }, [])
    
    const onClickLeftCell = (event: any, row: number, column: number) => {
        const cellClicked = gridMinesweeper[row][column]

            if (cellClicked.type === "cell-number" && cellClicked.status === "reveal") { // Click Left in reveal cell number
                const cellAround = detectCellAround(gridMinesweeper, row, column, width-1, height-1);
                const cellMarked = cellAround.filter(cell => cell.status === "marked")
                if (cellMarked.length >= cellClicked.number) {
                    const cellHidden = cellAround
                        .filter(cell => cell.status === "hidden")
                        .filter(cell => {cleanCurrentCell(gridMinesweeper, cell.coord[0], cell.coord[1]); return true})

                    cellHidden.forEach(cell => {if (cell.type === "cell-empty") {cleanBagEmptyCells(gridMinesweeper, cell.coord[0], cell.coord[1], width-1, height-1)}})
                    // cellHidden.forEach(cell => {if (cell.type === "cell-bomb") {onStatusLost()}})
                }

            } else if (cellClicked.type === "cell-empty" && cellClicked.status === "hidden") { // Click Left in hidden cell empty
                cleanBagEmptyCells(gridMinesweeper, row, column, width-1, height-1)
                
            } else if (cellClicked.type === "cell-bomb" && cellClicked.status === "hidden") { // Click Left in hidden cell bomb
                cleanCurrentCell(gridMinesweeper, row, column)
                // onStatusLost()
                
            } else if (cellClicked.type === "cell-number" && cellClicked.status === "hidden") { // Click Left in hidden cell number
                cleanCurrentCell(gridMinesweeper, row, column)
            }

        setUpdate(update + 1)
        checkRemainingCells(gridMinesweeper, setRemainingCells)
    }
    
    const onClickRightCell = (event: any, row: number, column: number) => {
        const cellClicked = gridMinesweeper[row][column]
        
        if (cellClicked.status === "hidden") { // Click Right in hidden cell
            subMines()
            cellClicked.status = "marked"
            
        } else if (cellClicked.status === "marked") { // Click Right in marked cell
            sumMines()
            cellClicked.status = "hidden"
        }
        
        setUpdate(update + 1)        
        checkRemainingCells(gridMinesweeper, setRemainingCells)
    }
    
    return (
        <div className='grid-minesweeper'>
            {
                gridMinesweeper.map((row, rowIndex) => <div key={"row"+rowIndex} className='row-cell'>
                {row.map((cell, columnIndex) => {
                    switch (cell.type) {
                        case "cell-bomb": return <BombCell
                            status={cell.status}
                            index={columnIndex}
                            rowIndex={rowIndex}
                            onClickLeftCell={onClickLeftCell}
                            onClickRightCell={onClickRightCell}
                        />
                        case "cell-empty": return <EmptyCell
                            status={cell.status}
                            index={columnIndex}
                            rowIndex={rowIndex}
                            onClickLeftCell={onClickLeftCell}
                            onClickRightCell={onClickRightCell}
                        />
                        case "cell-number": return <NumCell
                            number={cell.number}
                            status={cell.status}
                            index={columnIndex}
                            rowIndex={rowIndex}
                            onClickLeftCell={onClickLeftCell}
                            onClickRightCell={onClickRightCell}
                        />
                        default: return <div/>;
                    }})}
                </div>)
            }
        </div>
    )
}
