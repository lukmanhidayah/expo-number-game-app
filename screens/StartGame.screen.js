import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Button, Keyboard, Alert } from 'react-native';

//all components needed
import Card from '../components/Card.component';
import Input from '../components/Input.components';
import NumberContainer from '../components/NumberContainer.component';

//all constants needed
import Colors from '../constants/colors.constant'
const StartGame = props => {

   const [enteredValue, setEnteredValue] = useState('');
   const [confirmed, setConfirmed] = useState(false);
   const [selectedNumber, setSelectedNumber] = useState();

   const numberInputHandler = inputText => {
      setEnteredValue(inputText.replace(/[^0-9]/g, ''));
   };

   const resetInputHandler = () => {
      setEnteredValue('');
      setConfirmed(false);
   };

   const confirmInputHandler = () => {
      const chooseNumber = parseInt(enteredValue);
      if (isNaN(chooseNumber) || chooseNumber <= 0 || chooseNumber > 99) {
         Alert.alert('Invalid Number!', 'Number has to be a number between 1 to 99.', [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }])
         return;
      };
      setConfirmed(true);
      setSelectedNumber(chooseNumber);
      setEnteredValue('');
      Keyboard.dismiss();
   };

   let confirmedOutput;

   if (confirmed) {
      confirmedOutput = (
         <Card style={styles.summaryContainer}>
            <Text>You selected</Text>
            <NumberContainer>{selectedNumber}</NumberContainer>
            <Button title="Start Game" onPress={() => props.onStartGame(selectedNumber)} />
         </Card>
      );
   }

   return (
      <TouchableWithoutFeedback onPress={() => {
         Keyboard.dismiss();
      }}>
         <View style={styles.screen}>
            <Text style={styles.title}>Start a New Game!</Text>
            <Card style={styles.inputContainer}>
               <Text>Select a Number</Text>
               <Input
                  blurOnSubmit
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="numeric"
                  maxLength={2}
                  onChangeText={numberInputHandler}
                  value={enteredValue}
               />
               <View style={styles.buttonContainer}>
                  <View style={styles.button}>
                     <Button title="Reset" color={Colors.accent} onPress={resetInputHandler} />
                  </View>
                  <View style={styles.button}>
                     <Button title="Confirm" color={Colors.primary} onPress={confirmInputHandler} />
                  </View>
               </View>
            </Card>
            {confirmedOutput}
         </View>
      </TouchableWithoutFeedback>
   );
};

export default StartGame;

const styles = StyleSheet.create({
   screen: {
      flex: 1,
      padding: 10,
      alignItems: 'center'
   },
   title: {
      fontSize: 20,
      marginVertical: 10
   },
   inputContainer: {
      width: 300,
      maxWidth: '80%',
      alignItems: 'center',
   },
   buttonContainer: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
      paddingHorizontal: 15
   },
   button: {
      width: 80
   },
   summaryContainer: {
      marginTop: 20,
      alignItems: 'center'
   }
});
