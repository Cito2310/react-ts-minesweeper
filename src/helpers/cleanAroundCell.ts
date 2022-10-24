import { rowGrid } from "./createGridMinesweeper"

export const cleanAroundCell = (
    grid: rowGrid[], 
    row: number, 
    column: number,
    limitX: number,
    limitY: number,

    ):void => {
        grid[row][column].status = "reveal";  //cell click clear

        //top row clear
        if (row !== 0 && column !== 0)          {grid[row-1][column-1].status = "reveal"}
        if (row !== 0)                          {grid[row-1][column].status = "reveal"}
        if (row !== 0 && column !== limitX)     {grid[row-1][column+1].status = "reveal"}

        //middle row clear
        if (column !== 0)          {grid[row][column-1].status = "reveal"}
        if (column !== limitX)     {grid[row][column+1].status = "reveal"}
        
        //bottom row clear
        if (row !== limitY && column !== 0)          {grid[row+1][column-1].status = "reveal"}
        if (row !== limitY)                          {grid[row+1][column].status = "reveal"}
        if (row !== limitY && column !== limitX)     {grid[row+1][column+1].status = "reveal"}
}