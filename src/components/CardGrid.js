import React from "react";
import Card from "./Card";

const CardGrid = (props) => {
    const shownNums = [props.numbers[0], props.numbers[1], props.numbers[2], props.numbers[3]];

    return (
        <div> 
            <Card text={shownNums[0]}  handleCardClick={props.handleCardClick}/>
            <Card text={shownNums[1]}  handleCardClick={props.handleCardClick}/>
            <Card text={shownNums[2]}  handleCardClick={props.handleCardClick}/>
            <Card text={shownNums[3]}  handleCardClick={props.handleCardClick}/>
        </div>
    );
}
export default CardGrid;