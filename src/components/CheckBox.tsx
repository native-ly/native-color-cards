import React from 'react'
import { View } from 'react-native'
import Icon from 'native-icons'

interface Props {
  readonly checked: boolean
}

// TODO
export const CheckBox = ({ checked, ...props }: Props) => (
  <View {...props}>
    {checked && <Icon color="#fff" name="md-checkmark" size={18} />}
  </View>
)
