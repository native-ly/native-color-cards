import React, { useMemo } from 'react'
import { Animated, View } from 'react-native'
import Icon from 'native-icons'

import { Gradient } from './Gradient'
import { useTheme } from '../hooks/useTheme'

export const Card = () => {
  const {} = useTheme()

  const isSubTitleAvailable = useMemo(() => {}, [])
  const isOptionsAvailable = useMemo(() => {}, [])
  const isCheckBoxAvailable = useMemo(() => {}, [])

  return (
    <Animated.View>
      <TouchableScale>
        <Icon />
        {/* Icon */}
        {/* Options/CheckBox */}

        <View>
          <Title></Title>
          {/* Title */}
          {/* SubTitle */}
        </View>

        {/* Gradient */}
        <Gradient />
      </TouchableScale>
    </Animated.View>
  )
}
