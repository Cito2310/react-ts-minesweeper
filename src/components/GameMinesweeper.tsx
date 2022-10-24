import { useEffect, useState } from 'react';

import { createGridMinesweeper, rowGrid } from '../helpers/createGridMinesweeper';
import { cleanCurrentCell } from '../helpers/cleanCurrentCell';
import { cleanAroundCell } from '../helpers/cleanAroundCell';

import "../styles/game-minesweeper.scss"
import { detectCellAround } from '../helpers/detectCellAround';
import { cleanBagEmptyCells } from '../helpers/cleanBagEmptyCells';

interface props {
    width: number,
    height: number,
    mines: number,
    onStatusWin: () => void,
    onStatusLost: () => void,
}

export const GameMinesweeper = ({width, height, mines, onStatusLost, onStatusWin}: props) => {
    const [update, setUpdate] = useState(0)
    const [remainingMines, setRemainingMines] = useState(mines)
    const [gridMinesweeper, setGridMinesweeper] = useState<rowGrid[]>([[]])
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
                    cellHidden.forEach(cell => {if (cell.type === "cell-bomb") {onStatusLost()}})
                }

            } else if (cellClicked.type === "cell-empty" && cellClicked.status === "hidden") { // Click Left in hidden cell empty
                cleanBagEmptyCells(gridMinesweeper, row, column, width-1, height-1)
                
            } else if (cellClicked.type === "cell-bomb" && cellClicked.status === "hidden") { // Click Left in hidden cell bomb
                cleanCurrentCell(gridMinesweeper, row, column)
                onStatusLost()
                
            } else if (cellClicked.type === "cell-number" && cellClicked.status === "hidden") { // Click Left in hidden cell number
                cleanCurrentCell(gridMinesweeper, row, column)
            }

        setUpdate(update + 1)
    }

    const onClickRightCell = (event: any, row: number, column: number) => {
        const cellClicked = gridMinesweeper[row][column]

            if (cellClicked.status === "hidden") { // Click Right in hidden cell
                setRemainingMines(remainingMines - 1)
                cellClicked.status = "marked"

            } else if (cellClicked.status === "marked") { // Click Right in marked cell
                setRemainingMines(remainingMines + 1)
                cellClicked.status = "hidden"
            }

        setUpdate(update + 1)
    }
    

    return (
        <div className='grid-minesweeper'>
            <h3>Minas restantes {remainingMines}</h3>
            {
                gridMinesweeper.map((row, rowIndex) => <div key={"row"+rowIndex} className='row-cell'>
                {row.map(({number, status, type}, columnIndex) => 
                    <div key={"cell"+columnIndex} className='cell'>
                        {type === "cell-number" ? <div className='text-cell'>{number}</div> : undefined} 
                        {type === "cell-bomb" ? <div className='text-cell'>bomb</div> : undefined} 
                        {type === "cell-empty" ? <div className='text-cell'></div> : undefined} 

                        {status === "hidden" ? <div className='hidden-cell' /> : undefined} 
                        {status === "marked" ? <div className='marked-cell' /> : undefined} 

                        <div 
                            className='hitbox-cell' 
                            onContextMenu={(event)=>{event.preventDefault()}}
                            onClick={(event)=>{onClickLeftCell(event, rowIndex, columnIndex)}}
                            onAuxClick={(event)=>{onClickRightCell(event, rowIndex, columnIndex)}}
                        ></div>
                    </div>
                )}
                </div>)
            }
        </div>
    )
}
