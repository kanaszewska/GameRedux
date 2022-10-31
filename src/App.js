import "./App.css";
import GameBoard from '../src/components/GameBoard';
import Board from "./components/Board";
import Turn from "./components/Turn";
import PlayAgain from "../src/components/PlayAgain";
import { useSelector } from "react-redux";

function App() {
  const winner = useSelector((state) => state.winner);

  if (winner === "") {
    return (
      <div className="app">
        <div className="view">
          <Turn />
        </div>
        <GameBoard />
      </div>
    );
  } else {
    return (
      <div className="app">
        <div className="view">
          <Turn />
        </div>
        <Board />
        <PlayAgain />
      </div>
    );
  }
}

export default App;