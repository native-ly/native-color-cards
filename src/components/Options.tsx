import React, { useMemo } from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'native-icons'
import Color from 'color'
import { BlurView } from '../imports'

export const Options = ({}) => {
  const tint = useMemo(() => (Color(isDark).isDark() ? 'dark' : 'light'), [])

  return (
    <TouchableOpacity>
      <BlurView tint={tint} intensity={60}>
        <Icon name="" />
      </BlurView>
    </TouchableOpacity>
  )
}
