import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

//all components needed
import Card from '../components/Card.component';

const StartGame = props => {
   return (
      <View style={styles.screen}>
         <Text style={styles.title}>Start a New Game!</Text>
         <Card style={styles.inputContainer}>
            <Text>Select a Number</Text>
            <TextInput />
            <View style={styles.buttonContainer}>
               <Button title="Reset" />
               <Button title="Confirm" />
            </View>
         </Card>
      </View>
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
});
