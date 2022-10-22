import { useEffect, useState } from 'react';

import { createGridMinesweeper, rowMinesweeper } from '../helpers/createGridMinesweeper';

import "../styles/game-minesweeper.scss"
import { statusGrid, rowGrid } from '../helpers/statusGrid';

interface props {
    width: number,
    height: number,
    mines: number,
    onStatusWin: () => void,
    onStatusLost: () => void,
}

export const GameMinesweeper = ({width, height, mines, onStatusLost, onStatusWin}: props) => {
  
    const [clicker, setClicker] = useState(0)
    const [gridMinesweeper, setGridMinesweeper] = useState<rowMinesweeper[]>([[]])
    const [gridStatus, setGridStatus] = useState<rowGrid[]>([[]])
    useEffect(() => {
        setGridMinesweeper(createGridMinesweeper(height, width, mines))
        setGridStatus(statusGrid(height, width))
    }, [])
    
    const onClickCell = (event: any, row: number, column: number) => {
        if (gridStatus[row][column] === "") {
            gridStatus[row][column] = "clear";
            setClicker(clicker + 1)

            const cellClick = gridMinesweeper[row][column];
            if (cellClick === 9) { onStatusLost() }
        } else {
            
        }

    }

    return (
        <div className='grid-minesweeper'>
            {
                gridMinesweeper.map((row, rowIndex) => <div key={"row"+rowIndex} className='row-cell'>
                {row.map((column, columnIndex) => 
                    <div
                        key={"column"+columnIndex}
                        className='cell'
                    >
                        <div className='text-cell'>{column}</div>
                        {gridStatus[rowIndex][columnIndex] === "" ? <div className='hidden-cell'></div> : undefined}





                        <div className='hitbox-cell' onClick={(event)=>{onClickCell(event, rowIndex, columnIndex)}}></div>
                    </div>
                )}
                </div>)
            }
        </div>
    )
}
