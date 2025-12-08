import React from "react";
import "./DrawCardButton.css";
import {useRef} from "react";

const DrawCardButton = ({ newCount }) => {


    return (
      <div className="DrawCardButton">
        <button onClick={newCount}>Give Me a Card!</button>
      </div>
    )
}

export default DrawCardButton;
