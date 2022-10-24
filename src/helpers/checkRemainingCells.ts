import { rowGrid } from './createGridMinesweeper';

export const checkRemainingCells = (grid: rowGrid[], setRemainingCells: (value: React.SetStateAction<number | undefined>) => void) => {
    let newRemainingCells: number = 0
    grid.forEach(row => row.forEach(cell => {if(cell.status !== "reveal" && cell.type !== "cell-bomb") {newRemainingCells++}}))
    setRemainingCells(newRemainingCells)
}
