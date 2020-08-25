import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// all constants needed
import Colors from '../constants/colors.constant';
import TitleText from '../components/TitleText.component'

const Header = props => {
   return (
      <View style={styles.header}>
         <TitleText>{props.title}</TitleText>
      </View>
   );
}

const styles = StyleSheet.create({
   header: {
      width: '100%',
      height: 90,
      paddingTop: 36,
      backgroundColor: Colors.primary,
      alignItems: 'center',
      justifyContent: 'center'
   }
});

export default Header;