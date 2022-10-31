function winnerReducer(state = "", action) {
    switch (action.type) {
      case "winner/x":
        return "X";
  
      case "winner/o":
        return "O";
  
      case "winner/nobody":
        return "Nobody";
  
      case "winner/cancel":
        return "";
  
      default:
        return state;
    }
  }
  
  export default winnerReducer;