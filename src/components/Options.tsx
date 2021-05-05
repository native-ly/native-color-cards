import { BlurView } from 'expo-blur'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'native-icons'
// import { Icon } from 'react-native-vector-icons/Icon'

export const Options = () => {
  return (
    <TouchableOpacity>
      <BlurView>
        <Icon />
      </BlurView>
    </TouchableOpacity>
  )
}
