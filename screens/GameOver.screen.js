import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const GameOver = props => {
   return (
      <View style={styles.screen}>
         <Text>The game is over</Text>
         <Text>Number of rounds: {props.roundsNumber}</Text>
         <Text>Number was: {props.userNumber}</Text>
         <Button title="New Game" onPress={props.onRestart} />
      </View>
   )
}

export default GameOver

const styles = StyleSheet.create({
   screen: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
   }
})
