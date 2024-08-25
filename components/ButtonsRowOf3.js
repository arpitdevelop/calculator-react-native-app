import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

export default function ButtonsRowOf3({row, onButtonPress}) {
  return (
    <View style={styles.buttonsContainer}>
      {row.map((button, index) => (
        <View key={index} style={button === "0" ? [styles.buttonContainer, {width: '50%'}] : styles.buttonContainer}>
          <Pressable 
            style={styles.button} 
            onPress={() => onButtonPress(button)}
          >
            <Text>{button}</Text>
          </Pressable>
        </View>
      ))}
    </View>
  )
  }

const styles = StyleSheet.create({
  buttonsContainer: {
    flex: 1/5,
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    backgroundColor: 'purple',
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