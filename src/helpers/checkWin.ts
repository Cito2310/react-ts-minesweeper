export const checkWin = (remainingCells: number | undefined, onWin: () => void) => {
    if(remainingCells === 0) {onWin()}
}