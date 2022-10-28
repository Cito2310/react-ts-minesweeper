import cellNum1 from "../assets/cell/minesweeper-cell-num-1.png"
import cellNum2 from "../assets/cell/minesweeper-cell-num-2.png"
import cellNum3 from "../assets/cell/minesweeper-cell-num-3.png"
import cellNum4 from "../assets/cell/minesweeper-cell-num-4.png"
import cellNum5 from "../assets/cell/minesweeper-cell-num-5.png"
import cellNum6 from "../assets/cell/minesweeper-cell-num-6.png"
import cellNum7 from "../assets/cell/minesweeper-cell-num-7.png"
import cellNum8 from "../assets/cell/minesweeper-cell-num-8.png"

import cellHidden from "../assets/cell/minesweeper-cell-hidden.png"
import cellMarked from "../assets/cell/minesweeper-cell-marked.png"

import { TStatus } from './helpers/createGridMinesweeper';

interface props {
  index: number,
  onClickLeftCell: (event: any, row: number, column: number) => void,
  onClickRightCell: (event: any, row: number, column: number) => void,
  rowIndex: number,
  status: TStatus,
  number: number,
}

export const NumCell = ({status, number, index, rowIndex, onClickLeftCell, onClickRightCell} : props) => {

    const detectNumberCell = (number: number) => {
      switch (number) {
        case 1: return <img  src={cellNum1} />
        case 2: return <img  src={cellNum2} />
        case 3: return <img  src={cellNum3} />
        case 4: return <img  src={cellNum4} />
        case 5: return <img  src={cellNum5} />
        case 6: return <img  src={cellNum6} />
        case 7: return <img  src={cellNum7} />
        case 8: return <img  src={cellNum8} />
        default: return <div className="text-cell">Error</div>
      }
    }

    return (
        <div key={"cell" + index} className='cell'>
            {status === "reveal" ? detectNumberCell(number) : undefined} 
            {status === "hidden" ? <img  src={cellHidden} /> : undefined} 
            {status === "marked" ? <img  src={cellMarked} /> : undefined} 

            <div 
                className='hitbox-cell' 
                onContextMenu={(event)=>{event.preventDefault()}}
                onClick={(event)=>{onClickLeftCell(event, rowIndex, index)}}
                onAuxClick={(event)=>{onClickRightCell(event, rowIndex, index)}}
            />
        </div>
)}