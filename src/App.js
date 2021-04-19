import {useState} from 'react'

import Square from './components/Square'

import './App.css';

const Board = (props) => {
  const [xIsNext, setXIsNext] = useState(true)

  const renderSquare = (i) => {
    return (
      <Square
        value={i}
        hi={props.squares[i]}
        onSquareClicked={onSquareClicked}
      />
    );
  };

  const onSquareClicked = (i) => {
    if (props.squares[i]) {
      return
    }
    const newSquares = props.squares
    newSquares[i] = xIsNext ? 'X' : 'O'
    props.setSquares(newSquares);
    setXIsNext(!xIsNext);
  }

  const status = xIsNext ? "Next Player: X" : "Next Player: O";

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

const Game = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));

  return (
    <div className="game">
      <div className="d-flex flex-column">
        <h1>Tic Tac Toe</h1>
        <ul>
          <li>Khoa</li>
          <li>Khoi</li>
          <li>Tien</li>
          <li>Majid</li>
          <li>Nam</li>
          <li>Thao</li>
        </ul>
      </div>
      <div className="game-board">
        <Board squares={squares} setSquares={setSquares} />
      </div>
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
}

function App() {
  
  return (
    <div className="App">
      <Game />
    </div>
  );
}

export default App;
