import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

export default function ButtonsRowOf4({row, inputTextAdd}) {

  const inputTextAdd = (input) => {
    newInputText = inputText + input;
    setInputText(newInputText);
    console.log(inputText)}
  }



  return (
    <View style={styles.buttonsContainer}>

      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={inputTextAdd(row[0])}>
          <Text>{row[0]}</Text>
        </Pressable>
      </View>

      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={() => console.log("pressed")}>
          <Text>{row[1]}</Text>
        </Pressable>
      </View>

      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={() => console.log("pressed")}>
          <Text>{row[2]}</Text>
        </Pressable>
      </View>

      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={() => console.log("pressed")}>
          <Text>{row[3]}</Text>
        </Pressable>
      </View>
    </View>
    
  )
}

const styles = StyleSheet.create({
  buttonsContainer: {
    flex: 1/5,
    flexDirection: 'row',
    width: '100%',
    height: '100%',
  },
  buttonContainer: {
    height: '100%',
    width: '25%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
    backgroundColor: 'yellow',

  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

