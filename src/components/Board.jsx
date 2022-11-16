import { useSelector } from "react-redux";

function ViewBoard() {
  const board = useSelector((state) => state.board);
  const table = [];

  for (let row = 0; row < 3; row++) {
    const tableRow = [];
    for (let column = 0; column < 3; column++) {
      tableRow.push(<td key={`${row},${column}`}>{board[row][column]}</td>);
    }
    table.push(<tr key={`${row}`}>{tableRow}</tr>);
  }

  return (
    <div className="viewboard">
      <table>
        <tbody>{table}</tbody>
      </table>
    </div>
  );
}

export default ViewBoard;
