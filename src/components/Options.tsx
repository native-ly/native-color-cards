import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'native-icons'
import Color from 'color'
import { BlurView } from '../imports'

export const Options = ({}) => {
  return (
    <TouchableOpacity>
      <BlurView tint={Color(isDark).isDark() ? 'dark' : 'light'} intensity={60}>
        <Icon name="" />
      </BlurView>
    </TouchableOpacity>
  )
}
