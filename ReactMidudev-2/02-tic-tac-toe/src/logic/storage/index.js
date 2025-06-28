export const saveGameToStorage = ({board, turn}) => {
    //guardar aqui la partida
    //guardar el estado del tablero
    window.localStorage.setItem('board', JSON.stringify(board))
    //guardar el turno actual
    window.localStorage.setItem('turn', turn)
}


export const resetGameStorage = () => {
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
}