import { rowGrid } from './createGridMinesweeper';
export const cleanCurrentCell = (grid: rowGrid[], row: number, column: number): void => {
    grid[row][column].status = "reveal";
}
