import React from "react";
import { useSelector } from "react-redux";
import Modal from "./Modal";

function ViewTurn() {
  const turn = useSelector((state) => state.turn);
  const winner = useSelector((state) => state.winner);

  if (winner === "") {
    return <h3>Turn: {turn} Player</h3>;
  } else {
    return <Modal show={true}></Modal>;
  }
}

export default ViewTurn;
