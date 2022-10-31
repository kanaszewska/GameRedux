export function selectedWinner(board) {
  if (
    board[0][0] === board[0][1] &&
    board[0][1] === board[0][2] &&
    board[0][2] !== ''
  )
    return board[0][2];

  if (
    board[1][0] === board[1][1] &&
    board[1][1] === board[1][2] &&
    board[1][2] !== ''
  )
    return board[1][2];

  if (
    board[2][0] === board[2][1] &&
    board[2][1] === board[2][2] &&
    board[2][2] !== ''
  )
    return board[2][2];

  if (
    board[0][0] === board[1][0] &&
    board[1][0] === board[2][0] &&
    board[2][0] !== ''
  )
    return board[2][0];

  if (
    board[0][1] === board[1][1] &&
    board[1][1] === board[2][1] &&
    board[2][1] !== ''
  )
    return board[2][1];

  if (
    board[0][2] === board[1][2] &&
    board[1][2] === board[2][2] &&
    board[2][2] !== ''
  )
    return board[2][2];

  if (
    board[0][0] === board[1][1] &&
    board[1][1] === board[2][2] &&
    board[2][2] !== ''
  )
    return board[2][2];

  if (
    board[0][2] === board[1][1] &&
    board[1][1] === board[2][0] &&
    board[2][0] !== ''
  )
    return board[2][0];

  for (let row = 0; row < 3; row++) {
    for (let column = 0; column < 3; column++) {
      if (board[row][column] === '') return "Pending";
    };
  };

  return "Nobody";
};