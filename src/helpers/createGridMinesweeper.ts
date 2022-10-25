export type rowGrid = Cell[]

export class Cell {
    constructor(
        public coord: TCoord,
        public number: number,
        public status: TStatus,
        public type: TType,
        ) {}
    }

export type TType = "cell-bomb" | "cell-number" | "cell-empty";
type TCoord = [number, number];
export type TStatus = ("reveal" | "hidden" | "marked");

    
export const createGridMinesweeper = ( row: number, column: number, mines: number ): rowGrid[] => {
    let result: rowGrid[] = []

    const cellEmpty = (row: number, column: number): Cell => {return new Cell([row, column], 0, "hidden", "cell-empty")}
    const cellNumber = (row: number, column: number): Cell => {return new Cell([row, column], 1, "hidden", "cell-number")}
    const cellBomb = (row: number, column: number): Cell => {return new Cell([row, column], 0, "hidden", "cell-bomb")}
    
    // Create grid
    for (let x = 0; x < row; x++) {
        result.push([])
        for (let y = 0; y < column; y++) { result[x].push(cellEmpty(x, y)) }
    }
    
    // Assign mines cells
    let remainingMines: number = mines
    const percentageSpawnMine : number = mines / (row * column) * 100

    while (remainingMines > 0) {
        for (let x = 0; x < row; x++) {
            for (let y = 0; y < column; y++) {
                if (
                    (Math.random() * 100) < percentageSpawnMine &&  // random mine generation
                    (result[x][y].type === "cell-empty") &&                         // check with cell is empty
                    (remainingMines > 0)                            // check for remaining mines 
                ) { remainingMines--; result[x][y] = cellBomb(x, y) }
            }
        }
    }

    // Place number of nearby mines
    for (let x = 0; x < row; x++) {
        for (let y = 0; y < column; y++) {

            if (result[x][y].type === "cell-bomb") {

                if ( x !== 0 && y !== 0             && result[x-1][y-1].type !== "cell-bomb" )  { //top left corner
                    (result[x-1][y-1].type === "cell-empty") ?  result[x-1][y-1] = cellNumber(x-1, y-1) : result[x-1][y-1].number++ }

                if ( x !== 0                        && result[x-1][y].type !== "cell-bomb" )  { //top border
                    (result[x-1][y].type === "cell-empty") ?  result[x-1][y] = cellNumber(x-1, y) : result[x-1][y].number++ }

                if ( x !== 0 && y !== column-1      && result[x-1][y+1].type !== "cell-bomb" )  { //top right corner
                    (result[x-1][y+1].type === "cell-empty") ?  result[x-1][y+1] = cellNumber(x-1, y+1) : result[x-1][y+1].number++ }



                if ( y !== 0                        && result[x][y-1].type !== "cell-bomb" )  { //left border
                    (result[x][y-1].type === "cell-empty") ?  result[x][y-1] = cellNumber(x, y-1) : result[x][y-1].number++ }

                if ( y !== column-1                 && result[x][y+1].type !== "cell-bomb" )  { //right border
                    (result[x][y+1].type === "cell-empty") ?  result[x][y+1] = cellNumber(x, y+1) : result[x][y+1].number++ }



                if ( x !== row-1 && y !== 0             && result[x+1][y-1].type !== "cell-bomb" )  { //bottom left corner
                    (result[x+1][y-1].type === "cell-empty") ?  result[x+1][y-1] = cellNumber(x+1, y-1) : result[x+1][y-1].number++ }

                if ( x !== row-1            && result[x+1][y].type !== "cell-bomb" )  { //bottom border
                    (result[x+1][y].type === "cell-empty") ?  result[x+1][y] = cellNumber(x+1, y) : result[x+1][y].number++ }

                if ( x !== row-1 && y !== column-1             && result[x+1][y+1].type !== "cell-bomb" )  { //bottom right corner
                    (result[x+1][y+1].type === "cell-empty") ?  result[x+1][y+1] = cellNumber(x+1, y+1) : result[x+1][y+1].number++ }
            }
        }
    }

    return result
}