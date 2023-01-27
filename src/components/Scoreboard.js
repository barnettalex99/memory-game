import React from "react";

const Scoreboard = (props) => {
    return (
        <div> 
            <div>Current Score: {props.currentScore} Best Score: {props.bestScore}</div>
        </div>
    );
}
export default Scoreboard;