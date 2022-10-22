export type rowMinesweeper = number[]

// 0 - Is empty cell
// 9 - Is mine cell

export const createGridMinesweeper = ( row: number, column: number, mines: number ): rowMinesweeper[] => {
    let result: rowMinesweeper[] = []
    
    // Create grid
    for (let x = 0; x < row; x++) {
        result.push([])
        for (let y = 0; y < column; y++) { result[x].push(0) }
    }
    
    // Assign mines cells
    let remainingMines: number = mines
    const percentageSpawnMine : number = mines / (row * column) * 100

    while (remainingMines > 0) {
        for (let x = 0; x < row; x++) {
            for (let y = 0; y < column; y++) {
                if (
                    (Math.random() * 100) < percentageSpawnMine &&  // random mine generation
                    (result[x][y] === 0) &&                         // check with cell is empty
                    (remainingMines > 0)                            // check for remaining mines 
                ) { remainingMines--; result[x][y] = 9 }
            }
        }
    }

    // Place number of nearby mines
    for (let x = 0; x < row; x++) {
        for (let y = 0; y < column; y++) {

            if (result[x][y] === 9) {
                if ( x !== 0 && y !== 0             && result[x-1][y-1] !== 9 ) {result[x-1][y-1]++}     //top left corner
                if ( x !== 0                        && result[x-1][y] !== 9 ) {result[x-1][y]++}     //top border
                if ( x !== 0 && y !== column-1      && result[x-1][y+1] !== 9 ) {result[x-1][y+1]++}     //top right corner

                if ( y !== 0                        && result[x][y-1] !== 9 ) {result[x][y-1]++}     //left border
                if ( y !== column-1                 && result[x][y+1] !== 9 ) {result[x][y+1]++}     //right border

                if ( x !== row-1 && y !== 0         && result[x+1][y-1] !== 9 ) {result[x+1][y-1]++}     //bottom left corner
                if ( x !== row-1                    && result[x+1][y] !== 9 ) {result[x+1][y]++}       //bottom border
                if ( x !== row-1 && y !== column-1  && result[x+1][y+1] !== 9 ) {result[x+1][y+1]++}     //bottom right corner
            }
        }
    }

    return result
}