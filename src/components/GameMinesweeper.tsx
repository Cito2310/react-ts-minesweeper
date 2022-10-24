import { useEffect, useState } from 'react';

import { createGridMinesweeper, rowGrid } from '../helpers/createGridMinesweeper';
import { cleanCurrentCell } from '../helpers/cleanCurrentCell';
import { cleanAroundCell } from '../helpers/cleanAroundCell';

import "../styles/game-minesweeper.scss"
import { detectCellAround } from '../helpers/detectCellAround';

interface props {
    width: number,
    height: number,
    mines: number,
    onStatusWin: () => void,
    onStatusLost: () => void,
}

export const GameMinesweeper = ({width, height, mines, onStatusLost, onStatusWin}: props) => {
    const [update, setUpdate] = useState(0)
    const [gridMinesweeper, setGridMinesweeper] = useState<rowGrid[]>([[]])
    useEffect(() => { setGridMinesweeper(createGridMinesweeper(height, width, mines)) }, [])

    const onClickCell = (event: any, row: number, column: number) => {
        if (false) {

        } else if (gridMinesweeper[row][column].type === "cell-empty") {
            cleanCurrentCell(gridMinesweeper, row, column)
            console.log(detectCellAround(gridMinesweeper, row, column, width-1, height-1))
            cleanAroundCell(gridMinesweeper, row, column, width-1, height-1)
            setUpdate(update + 1)
            
        } else if (gridMinesweeper[row][column].type === "cell-bomb") {
            cleanCurrentCell(gridMinesweeper, row, column)
            console.log(detectCellAround(gridMinesweeper, row, column, width-1, height-1))
            setUpdate(update + 1)
            
        } else if (gridMinesweeper[row][column].type === "cell-number") {
            cleanCurrentCell(gridMinesweeper, row, column)
            console.log(detectCellAround(gridMinesweeper, row, column, width-1, height-1))
            setUpdate(update + 1)
        }
    }
    

    return (
        <div className='grid-minesweeper'>
            {
                gridMinesweeper.map((row, rowIndex) => <div key={"row"+rowIndex} className='row-cell'>
                {row.map(({number, status, type}, columnIndex) => 
                    <div key={"cell"+columnIndex} className='cell'>
                        {type === "cell-number" ? <div className='text-cell'>{number}</div> : undefined} 
                        {type === "cell-bomb" ? <div className='text-cell'>bomb</div> : undefined} 
                        {type === "cell-empty" ? <div className='text-cell'></div> : undefined} 

                        {status === "hidden" ? <div className='hidden-cell' /> : undefined} 

                        <div className='hitbox-cell' onClick={(event)=>{onClickCell(event, rowIndex, columnIndex)}}></div>
                    </div>
                )}
                </div>)
            }
        </div>
    )
}
