import {useState, useEffect} from 'react'
import confetti from 'canvas-confetti'
import Square from './components/Square'
import {TURNS} from './constants'
import {checkWinnerFrom,checkEndGame} from './logic/board'
import WinnerModal from './components/WinnerModal'
import {saveGameToStorage, resetGameStorage} from './logic/storage'


function App() {
  // estado para el tablero
  const [board,setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    if (boardFromStorage) return JSON.parse(boardFromStorage)
    return Array(9).fill(null)
  })
  // console.log(board)
  // const [board,setBoard] = useState(['x','x','o','x','o','x','o','o','x'])

  // estado para empezar el turno
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })

  // estado para el ganador
  const[winner,setWinner] = useState(null) // null que no hay ganador, el false un empate
 


  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    resetGameStorage()
  }

  const newBoard = [...board]
  const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X

  const updateBoard = (index) =>{
    // no actualizamos si esta algun elemento en la posición
    if(board[index] || winner) return


    // actualizar el tablero
    newBoard[index] = turn // x u o
    setBoard(newBoard)

    // cambiar el turno
    setTurn(newTurn)
    
    // revisar si hay un ganador
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner){
      setWinner(newWinner)
      confetti()
    } else if (checkEndGame(newBoard)){
      setWinner(false) // empate
    }
  }


  // cada vez que el turno o el tablero cambie, guardamos el estado del juego
  useEffect(() => {
    saveGameToStorage({board: newBoard, turn: newTurn})
  },[newBoard, newTurn])

  return (
  <main className="board">
    <h1>Tic Tac Toe</h1>
    <button onClick={resetGame}>Reset del Juego</button>
    <section className="game">
      {board.map((_,index) => {
        return (
          <Square key={index} index={index} updateBoard={updateBoard}>
            {board[index]}
          </Square>
        )
      })
    }
    </section>

    <section className="turn">
      <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
      <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
    </section>

    {/*componente para mostrar el ganador*/}
    <WinnerModal resetGame={resetGame} winner={winner}/>
  </main>
  )
}

export default App
