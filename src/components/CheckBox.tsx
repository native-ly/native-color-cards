import React from 'react'
import { View } from 'react-native'
import Icon from 'native-icons'

// TODO
export const CheckBox = ({ checked }) => {
  return (
    <View {...props}>
      {checked && <Icon color="#fff" name="md-checkmark" size={18} />}
    </View>
  )
}
