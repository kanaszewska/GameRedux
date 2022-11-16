function turnReducer(state = "X", action) {
  switch (action.type) {
    case "turn/x":
      return "X";

    case "turn/o":
      return "O";

    case "turn/cancel":
      return "X";

    default:
      return state;
  }
}

export default turnReducer;
