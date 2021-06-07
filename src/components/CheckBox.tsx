import React from 'react'
import { View, StyleSheet } from 'react-native'
import Icon from 'native-icons'

interface CheckBoxProps {
  readonly checked?: boolean
}

// TODO
export const CheckBox = ({ checked }: CheckBoxProps) => {
  return (
    <View
      style={StyleSheet.flatten([styles.checkbox, checked && styles.checked])}
    >
      {checked && <Icon color="#fff" name="md-checkmark" size={18} />}
    </View>
  )
}

const styles = StyleSheet.create({
  checkbox: {
    right: 11,
    top: 9,
    position: 'absolute',
    // border: 1px solid #fff;
    borderRadius: 15,
    paddingTop: 2,
  },
  checked: {
    backgroundColor: '#007aff',
  },
})
