import React from "react";
import {useState, useEffect} from "react";


const DrawCard = ({ count , fetchCards , cards, card}) => {

    return (
        <div>
            <img src={card?.image} alt={card?.code} />
        </div>
    );
}
    

export default DrawCard;