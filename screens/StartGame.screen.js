import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

//all components needed
import Card from '../components/Card.component';

//all constants needed
import Colors from '../constants/colors.constant'
const StartGame = props => {
   return (
      <View style={styles.screen}>
         <Text style={styles.title}>Start a New Game!</Text>
         <Card style={styles.inputContainer}>
            <Text>Select a Number</Text>
            <TextInput />
            <View style={styles.buttonContainer}>
               <View style={styles.button}>
                  <Button title="Reset" color={Colors.accent} />
               </View>
               <View style={styles.button}>
                  <Button title="Confirm" color={Colors.primary} />
               </View>
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
   button: {
      width: 80
   }
});
