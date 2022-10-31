const initialState = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  function boardReducer(state = initialState, action) {
    switch (action.type) {
      case "board/moveX":
        const rowX = action.payload[0];
        const columnX = action.payload[1];
        const newStateX = [...state];
        newStateX[rowX][columnX] = "X";
        return newStateX;
  
      case "board/moveO":
        const rowO = action.payload[0];
        const columnO = action.payload[1];
        const newStateO = [...state];
        newStateO[rowO][columnO] = "O";
        return newStateO;
  
      case "board/cancel":
        return [
          ["", "", ""],
          ["", "", ""],
          ["", "", ""],
        ];
  
      default:
        return state;
    }
  }
  
  export default boardReducer;