import { useSelector, useDispatch } from "react-redux";
import { moveX, moveO, turnX, turnO, winnerX, winnerO, winnerNobody } from "../state/actions/allActions";
import { selectedWinner } from './function.js';
import '../styles/GameBoard.css';

function GameBoard() {
  const dispatch = useDispatch();
  const board = useSelector((state) => state.board);
  const turn = useSelector((state) => state.turn);

  const table = [];

  for (let row = 0; row < 3; row++) {
    const tableRow = [];
    for (let column = 0; column < 3; column++) {

      tableRow.push(
        <td 
          className="td"
          key={`${row},${column}`}
          onClick={() => {

            if (turn === "X") {
              dispatch(moveX(row, column));
              dispatch(turnO());
            } else {
              dispatch(moveO(row, column));
              dispatch(turnX());
            }
            const winner = selectedWinner(board);
            if (winner === "X") dispatch(winnerX());
            if (winner === "O") dispatch(winnerO());
            if (winner === "Nobody") dispatch(winnerNobody());
          }}
        >
          {board[row][column]}
        </td>
      );
    }
    table.push(<tr key={`${row}`}>{tableRow}</tr>);
  }
  return (
    <div className="gameboard">
      <table>
        <tbody>
          {table}
        </tbody>
      </table>
    </div>
  );
}

export default GameBoard;