import React from "react";

const Card = (props) => {
    return <button onClick={props.handleCardClick}>{props.text}</button>
}
export default Card;