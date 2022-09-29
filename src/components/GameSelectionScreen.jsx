import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import { GamesData } from "../data/GamesData";
import NextPage from "../components/home_components/NextPage";
import PrevPage from "../components/home_components/PrevPage";

import "../App.css";

const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100vw",
    backgroundColor: "#F6F7FB",
  },

  home: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  start: {
    marginTop: "30px",
    fontWeight: "bold",
  },
}));

const GameSelectionScreen = ({
  setGameState,
  currentGameIdx,
  setCurrentGameIdx,
}) => {
  const classes = useStyles();


   function idxUp() {
    if (currentGameIdx < GamesData.length - 1) {
      setCurrentGameIdx(prevState => prevState + 1)
    }
  };

  function idxDown() {
    if (currentGameIdx > 0) {
      setCurrentGameIdx(prevState => prevState - 1)
    }
  };
  

  return (
    <div className={classes.home}>
      <div style={{ display: "flex", flexDirection: "row" }}>

        {currentGameIdx === 0 ? (
          <PrevPage idxDown={idxDown} disable={true} />
        ) : (
          <PrevPage idxDown={idxDown} disable={false} />
        )}

      
        <div style={{ color: "#f7f7f7", textAlign: "center" }}>
             <h1>{GamesData[currentGameIdx].name}</h1>
        </div>
      

        {currentGameIdx === GamesData.length - 1 ? (
          <NextPage idxUp={idxUp} disable={true} />
        ) : (
          <NextPage idxUp={idxUp} disable={false} />
        )}

      </div>

      <Button
          variant="contained"
          color="primary"
          className={classes.start}
          onClick={() => setGameState("activeGame")}
        >
          START
        </Button>
    </div>
  );
};

export default GameSelectionScreen;
