export type rowGrid = string[]

export const statusGrid = ( row: number, column: number ): rowGrid[] => {
    let result: rowGrid[] = []
    
    // Create grid
    for (let x = 0; x < row; x++) {
        result.push([])
        for (let y = 0; y < column; y++) { result[x].push("") }
    }
    
    return result
}