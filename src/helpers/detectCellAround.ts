import { rowGrid, Cell } from './createGridMinesweeper';

export const detectCellAround = (
    grid: rowGrid[],
    row: number,
    column: number,
    limitX: number,
    limitY: number,

    ): Cell[] => {
        let result: Cell[] = [];

        //top row clear
        if (row !== 0 && column !== 0)          {result.push(grid[row-1][column-1])}
        if (row !== 0)                          {result.push(grid[row-1][column])}
        if (row !== 0 && column !== limitX)     {result.push(grid[row-1][column+1])}

        // middle row clear
        if (column !== 0)          {result.push(grid[row][column-1])}
        if (column !== limitX)     {result.push(grid[row][column+1])}
        
        // bottom row clear
        if (row !== limitY && column !== 0)          {result.push(grid[row+1][column-1])}
        if (row !== limitY)                          {result.push(grid[row+1][column])}
        if (row !== limitY && column !== limitX)     {result.push(grid[row+1][column+1])}

        return result;
}
