import React from "react";
import "../styles/Modal.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  cancelBoard,
  cancelTurn,
  cancelWinner,
} from "../state/actions/allActions";

const Modal = (props) => {
  const winner = useSelector((state) => state.winner);
  const dispatch = useDispatch();

  if (!props.show) {
    return null;
  }
  return (
    <div className="modal">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="model-header">
          <h4 className="modal-title">
            <p>AND THE WINNER IS...</p>
          </h4>
        </div>
        <div className="modal-body">
          <h3>PLAYER: {winner}</h3>
        </div>
        <div className="modal-footer">
          <button
            className="play"
            onClick={() => {
              dispatch(cancelBoard());
              dispatch(cancelTurn());
              dispatch(cancelWinner());
            }}
          >
            PLAY AGAIN
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
