import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

// all components needed
import Header from './components/Header.component'
import StartGame from './screens/StartGame.screen'
import Game from './screens/Game.screen'
import GameOver from './screens/GameOver.screen'

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessNumber] = useState(0);

  const configureNewGame = () => {
    setGuessNumber(0)
    setUserNumber(null);

  };

  const gameOverHandler = numbRounds => {
    setGuessNumber(numbRounds);
  };

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setGuessNumber(0);
  };

  let content = <StartGame onStartGame={startGameHandler} />

  if (userNumber && guessRounds <= 0) {
    content = <Game userChoice={userNumber} onGameOver={gameOverHandler} />
  } else if (guessRounds > 0) {
    content = <GameOver userNumber={userNumber} roundsNumber={guessRounds} onRestart={configureNewGame} />
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
