import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";

//all components needed
import TitleText from "../components/TitleText.component";
import BodyText from "../components/BodyText.component";
import MainButton from "../components/MainButton.component";

//all contrant needed
import Colors from "../constants/colors.constant";

const GameOver = (props) => {
  return (
    <ScrollView>
      <View style={styles.screen}>
        <TitleText>The Game is Over</TitleText>
        <View style={styles.imageContainer}>
          <Image
            // source={require("../assets/success.png")}
            source={{
              uri:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRGwi-OTzXAVBPzBJLMqEcHxNRVRlcCBfeAVQ&usqp=CAU",
            }}
            style={styles.image}
            resizeMode="stretch"
          />
        </View>
        <View style={styles.resutlContainter}>
          <BodyText style={styles.resultText}>
            Number of rounds is{" "}
            <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds
            guess the number{" "}
            <Text style={styles.highlight}>{props.userNumber}</Text>
          </BodyText>
        </View>
        <MainButton onPress={props.onRestart}>New Game</MainButton>
      </View>
    </ScrollView>
  );
};

export default GameOver;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").width * 0.7,
    borderRadius: (Dimensions.get("window").width * 0.7) / 2,
    borderWidth: 3,
    borderColor: Colors.primary,
    overflow: "hidden",
    marginVertical: Dimensions.get("window").height / 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  resutlContainter: {
    marginHorizontal: 30,
    marginVertical: Dimensions.get("window").height / 60,
  },
  resultText: {
    textAlign: "center",
    fontSize: Dimensions.get("window").height < 400 ? 16 : 20,
  },
  highlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold",
  },
});
