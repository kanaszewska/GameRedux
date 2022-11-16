export function moveX(row, column) {
  return {
    type: "board/moveX",
    payload: [row, column],
  };
}

export function moveO(row, column) {
  return {
    type: "board/moveO",
    payload: [row, column],
  };
}

export function cancelBoard() {
  return {
    type: "board/cancel",
  };
}

export function turnX() {
  return {
    type: "turn/x",
  };
}

export function turnO() {
  return {
    type: "turn/o",
  };
}

export function cancelTurn() {
  return {
    type: "turn/cancel",
  };
}

export function winnerX() {
  return {
    type: "winner/x",
  };
}

export function winnerO() {
  return {
    type: "winner/o",
  };
}

export function winnerNobody() {
  return {
    type: "winner/nobody",
  };
}

export function cancelWinner() {
  return {
    type: "winner/cancel",
  };
}
