import {WINNER_COMBOS} from '../constants'

export const checkWinnerFrom = (boardToCheck) => {
    // revisamos todas las combinaciones ganadores
    // para ver si X u O ganó
    for (const combo of WINNER_COMBOS){
      const [a,b,c] = combo
      if (
        boardToCheck[a] && 
        boardToCheck[a] === boardToCheck[b] && boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a]
      }
    }
    return null
}

export const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square !== null)
}

