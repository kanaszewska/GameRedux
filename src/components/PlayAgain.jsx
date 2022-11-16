import { useDispatch } from "react-redux";
import {
  cancelBoard,
  cancelTurn,
  cancelWinner,
} from "../state/actions/allActions";

import "../styles/PlayAgain.css";

function PlayAgain() {
  const dispatch = useDispatch();
  return (
    <button
      className="play"
      onClick={() => {
        dispatch(cancelBoard());
        dispatch(cancelTurn());
        dispatch(cancelWinner());
      }}
    >
      Play Again
    </button>
  );
}

export default PlayAgain;
