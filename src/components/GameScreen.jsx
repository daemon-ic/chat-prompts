import React, { useState, useRef } from "react";
import Button from "@material-ui/core/Button";
import "../App.css";
import Card from "./Card";
import DrawCard from "./main_game_components/DrawCard";
import { GamesData } from "../data/GamesData";

const sleep = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, timeout);
  });
};

const GameScreen = ({
  currentGameIdx,
  setGameState,
}) => {

  const cardIsBeingAnimated = useRef(false);
  const { questions } = GamesData[currentGameIdx];

  function randomCardIdx() {
   return Math.floor(Math.random() * questions.length);
  }

  const [cardIdx, setCardIdx] = useState(randomCardIdx())


  const performAnimation = async () => {
    const cardItem = document.getElementById("card-item");
    if (cardItem) {
      cardItem.className = cardItem.className.replace("slide active", "slide");
      await sleep(250);
      cardItem.className = cardItem.className.replace("slide", "slide active");
    }
    cardIsBeingAnimated.current = false;
  };

  function onNextCard()  {
    if (!cardIsBeingAnimated.current) {
      cardIsBeingAnimated.current = true;
    setCardIdx(randomCardIdx());
    performAnimation();
    }
  };


  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
        }}
      >
        <Button
          style={{ fontWeight: "bold", margin: "10px", color: "white" }}
          // color="primary"
          onClick={() => setGameState("gameSetup")}
        >
          Back
        </Button>
      </div>

      <Card
        currentGame={GamesData[currentGameIdx]}
        currentQuestion={questions[cardIdx]}
        questions={questions}
      />
      <DrawCard
        draw={onNextCard}
      />
    </div>
  );
};

export default GameScreen;
