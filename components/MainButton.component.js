import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

//all contrants needed
import Colors from "../constants/colors.constant";

const MainButton = (props) => {
  return (
    <TouchableOpacity activeOpacity={.7} onPress={props.onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MainButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontFamily: "open-sans",
    fontSize: 18,
  },
});
