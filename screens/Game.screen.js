import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";

//all components needed
import NumberContainer from "../components/NumberContainer.component";
import Card from "../components/Card.component";
import MainButton from "../components/MainButton.component";

//all components needed
import DefaultStyles from "../constants/default-styles";

const generateRandomBetweenNumber = (min, max, exlude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exlude) {
    return generateRandomBetweenNumber(min, max, exlude);
  } else {
    return rndNum;
  }
};

const Game = (props) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetweenNumber(1, 100, props.userChoice)
  );

  const [rounds, setRounds] = useState(0);
  const currentLow = useRef(1);
  const currentHight = useRef(100);

  const { userChoice, onGameOver } = props;

  useEffect(() => {
    if (currentGuess == userChoice) {
      onGameOver(rounds);
    }
  }, [currentGuess, userChoice, onGameOver]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < props.userChoice) ||
      (direction === "greater" && currentGuess > props.userChoice)
    ) {
      Alert.alert("Dont't lie!", "You know that is is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      currentHight.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }

    const nextNumber = generateRandomBetweenNumber(
      currentLow.current,
      currentHight.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
    setRounds((curRounds) => curRounds + 1);
  };

  return (
    <View style={styles.screen}>
      <Text style={DefaultStyles.bodyText}>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <MainButton onPress={nextGuessHandler.bind(this, "lower")}>
          Lower
        </MainButton>
        <MainButton onPress={nextGuessHandler.bind(this, "greater")}>
          Greater
        </MainButton>
      </Card>
    </View>
  );
};

export default Game;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    width: 300,
    maxWidth: "90%",
  },
});
