import React from 'react'
import { View } from 'react-native'
import Icon from 'native-icons'

export const CheckBox: React.FC<{ checked: boolean }> = ({
  checked,
  ...props
}) => (
  <View {...props}>
    {checked && <Icon color="#fff" name="md-checkmark" size={18} />}
  </View>
)
