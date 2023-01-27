import React, {useState, useEffect} from "react";
import CardGrid from "./CardGrid";
import Scoreboard from "./Scoreboard";

function Main() {
  const [numbers, setNumbers] = useState([]);
  const [clickedNumbers, setClickedNumbers] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  // basically like component did update
  useEffect(() => {
    const loadNums = () => {
      setNumbers(shuffleArray(fetchNumbers(100)));
    }
    loadNums();
  }, []) // this might not be the right place for this

  const shuffleArray = (array) => {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
  }

  const fetchNumbers =  (amount) => {
    const numbers = []

    for (let i = 1; i <= amount; i++) {
      numbers.push(i);
    }

    return numbers;
  }

  const handleCardClick = (e) => {
    const cardNum = e.target.textContent;
    playRound(cardNum);
  }

  const playRound = (num) => {
    if (clickedNumbers.includes(num)) {
      resetGame();
    } else {
      const newScore = currentScore + 1
      if (newScore > bestScore) setBestScore(newScore)
      setCurrentScore(newScore);
      setClickedNumbers((prevState) => [...prevState, num]);
      setNumbers(shuffleArray(fetchNumbers(100)));
    }
  }

  const resetGame = () => {
    setClickedNumbers([]);
    setCurrentScore(0);
    setNumbers(shuffleArray(fetchNumbers(100)));
  }

  return (
    <div className="main">
        <Scoreboard currentScore={currentScore} bestScore={bestScore} />
        <CardGrid numbers={numbers} clickedNumbers={clickedNumbers} setClickedNumbers={setClickedNumbers} handleCardClick={handleCardClick}/>
    </div>
  );
  }
  
  export default Main;