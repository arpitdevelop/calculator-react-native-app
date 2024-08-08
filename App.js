import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native'

import ButtonsRowOf4 from './components/ButtonsRowOf4';
import ButtonsRowOf3 from './components/ButtonsRowOf3';

const buttonsData = [
  ['AC', '+/-', '%', '/'],
  ['7', '8', '9', 'X'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', '.', '='],
]

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={{color: 'white'}}>Notes App</Text>
      </View>
      <View style={styles.buttonsContainer}>
      <ButtonsRowOf4 row={buttonsData[0]}></ButtonsRowOf4>
      <ButtonsRowOf4 row={buttonsData[1]}></ButtonsRowOf4>
      <ButtonsRowOf4 row={buttonsData[2]}></ButtonsRowOf4>
      <ButtonsRowOf4 row={buttonsData[3]}></ButtonsRowOf4>
      <ButtonsRowOf3 row={buttonsData[4]}></ButtonsRowOf3>
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
