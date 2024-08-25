import { Text, StyleSheet } from 'react-native'
import React from 'react'

export default function InputBar({display}) {
  return (
      <Text style = {styles.inputbar}>{display}</Text>
  )
}

const styles = StyleSheet.create({
  inputbar: {
    height: '100%',
    textAlign: 'right',
    fontSize: 80,
    marginHorizontal: 20,
    color: 'white',
    textAlignVertical: 'bottom',
  },
})