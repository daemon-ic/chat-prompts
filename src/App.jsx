import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GameSelectionScreen from "./components/GameSelectionScreen";
import GameScreen from "./components/GameScreen";
import bg from "./static/images/bg.jpg"
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#18191a"
    },
    secondary: {
      main: "#ffcc80"
    }
  }
});

const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100vw",
    backgroundColor: "#404040"
    // backgroundImage: `url(${bg})`
 
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

function App() {
  const classes = useStyles();

  const [gameState, setGameState] = useState("gameSetup");
  const [currentGameIdx, setCurrentGameIdx] = useState(0);


  return (
    <ThemeProvider theme={theme}>
    <div className={classes.main}>

      {gameState === "gameSetup" && (
        <GameSelectionScreen
        setGameState={setGameState}
        currentGameIdx={currentGameIdx}
        setCurrentGameIdx={setCurrentGameIdx}
        />
      )}


       {gameState === "activeGame" && (
        <GameScreen
        setGameState={setGameState}
        currentGameIdx={currentGameIdx}
        setCurrentGameIdx={setCurrentGameIdx}
        />
      )}

    </div>
    </ThemeProvider>
  );
}

export default App;
