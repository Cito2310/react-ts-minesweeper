import { rowGrid, Cell } from './createGridMinesweeper';
import { detectCellAround } from './detectCellAround';
import { cleanAroundCell } from './cleanAroundCell';
export const cleanBagEmptyCells = (
    grid: rowGrid[],
    row: number,
    column: number,
    limitX: number,
    limitY: number,

    ) => {
        let queueCellEmpty = [grid[row][column]];

        while (queueCellEmpty.length > 0) {
            const newQueueCellEmpty = [...queueCellEmpty];
            queueCellEmpty = [];

            newQueueCellEmpty.forEach(({coord, type}) => {
                detectCellAround(grid, coord[0], coord[1], limitX, limitY).map(
                    cell => { if(cell.status === "hidden" && cell.type === "cell-empty") {
                        console.log("Se activo este")
                        queueCellEmpty.push(cell)
                    }}
                )
                cleanAroundCell(grid, coord[0], coord[1], limitX, limitY);
            })
        }
}
