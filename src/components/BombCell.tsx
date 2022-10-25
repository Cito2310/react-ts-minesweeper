import cellBombActive from "../assets/cell/minesweeper-cell-bomb-active.png"
import cellHidden from "../assets/cell/minesweeper-cell-hidden.png"
import cellMarked from "../assets/cell/minesweeper-cell-marked.png"

import { TStatus } from '../helpers/createGridMinesweeper';

interface props {
    index: number,
    onClickLeftCell: (event: any, row: number, column: number) => void,
    onClickRightCell: (event: any, row: number, column: number) => void,
    rowIndex: number,
    status: TStatus
}

export const BombCell = ({status, index, rowIndex, onClickLeftCell, onClickRightCell} : props) => 
    <div key={"cell" + index} className='cell'>
        {status === "reveal" ? <img  src={cellBombActive} /> : undefined} 
        {status === "marked" ? <img  src={cellMarked} /> : undefined} 
        {status === "hidden" ? <img  src={cellHidden} /> : undefined} 

        <div 
            className='hitbox-cell' 
            onContextMenu={(event)=>{event.preventDefault()}}
            onClick={(event)=>{onClickLeftCell(event, rowIndex, index)}}
            onAuxClick={(event)=>{onClickRightCell(event, rowIndex, index)}}
        />
    </div>