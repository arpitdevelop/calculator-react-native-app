import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native'

import ButtonsRowOf4 from './components/ButtonsRowOf4';
import ButtonsRowOf3 from './components/ButtonsRowOf3';
import InputBar from './components/InputBar';
import { useCallback, useState } from 'react';

export default function App() {
  const buttonsData = [
    ['AC', '+/-', '%', '/'],
    ['7', '8', '9', '*'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ]
  
  const [display, setDisplay] = useState("0")

  const handleButtonPress = useCallback((num) => {
    if (num === 'AC') {
      setDisplay("0");
    } else if (num === '=') {
      try {
        // This is a simplistic approach. Consider using a proper expression parser for production.
        let result = Function(`'use strict'; return (${display})`)();
        setDisplay(result.toString());
      } catch (error) {
        setDisplay("Error");
      }
    } 
    // else if (num === '+/-') {
    //   setDisplay(-1*display)
    // } 
    else {
      setDisplay((prev) => {
        if (prev === "0") {
          return num;
        } else {
          return prev + num;
        }
      }
      );
    }
  }, [display]);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
      <InputBar style={{color: 'white'}} display = {display}></InputBar>
        {/* <Text style={{color: 'white'}} display = {display}>{display}</Text> */}
      </View>
      <View style={styles.buttonsContainer}>
      <ButtonsRowOf4 row={buttonsData[0]} onButtonPress = {handleButtonPress} />
      <ButtonsRowOf4 row={buttonsData[1]} onButtonPress = {handleButtonPress} />
      <ButtonsRowOf4 row={buttonsData[2]} onButtonPress = {handleButtonPress} />
      <ButtonsRowOf4 row={buttonsData[3]} onButtonPress = {handleButtonPress} />
      <ButtonsRowOf3 row={buttonsData[4]} onButtonPress = {handleButtonPress} />
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151718',
    paddingHorizontal: 10,
  },
  inputContainer: {
    flex: 1,
    backgroundColor:'red',
    paddingTop: 58,
  },
  buttonsContainer: {
    flex: 2,
    backgroundColor:'green',
  },
});
