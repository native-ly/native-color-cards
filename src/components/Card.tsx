import React, { useState, useContext } from 'react'
import { Animated, Easing, TouchableOpacity } from 'react-native'
import { Haptic } from 'expo'
import Color from 'color'

import { Title } from './Title'
import { Options } from './Options'
import { Gradient } from './Gradient'
import { Check } from './CheckBox'

import { checkColor } from '../helpers'

import { Card as Props } from '../interfaces'

import { ListContext } from '../context'

import { Base } from '../bases/Card'
import { Icon } from '../bases/Icon'

export const Card = ({
  backgroundColor,
  title = '',
  color = 'adjust',
  titleProps = {},
  optionsProps = {},
  gradientProps = {},
  checkBoxProps = {},
  gradient = false,
  shadow = false,
  scalable = true,
  icon = 'ios-car',
  flat = false,
  onLongPress,
  ...props
}: Props) => {
  const { startEditable, isEditable } = useContext(ListContext)

  const [checked, setChecked] = useState<boolean>(false)
  const [scale, setScale] = useState<number>(0.96)

  const animatedValue = new Animated.Value(0)

  const press = () => {
    setChecked(!checked)
    setScale(scalable ? 0.96 : 1)

    Haptic.selectionAsync()
  }

  const longPress = () => {
    startEditable(true)

    onLongPress()
  }

  Animated.loop(
    Animated.sequence([
      Animated.timing(animatedValue, {
        toValue: 0.3,
        duration: 100,
        easing: Easing.bounce,
        useNativeDriver: true,
      }),
      Animated.timing(animatedValue, {
        toValue: -0.3,
        duration: 100,
        easing: Easing.bounce,
        useNativeDriver: true,
      }),
      Animated.timing(animatedValue, {
        toValue: 0.0,
        duration: 100,
        easing: Easing.bounce,
        useNativeDriver: true,
      }),
    ])
  ).start()

  if (color === 'adjust') {
    color = checkColor(backgroundColor)
  } else if (color === 'contrast') {
    color = Color(backgroundColor).isDark() ? '#fff' : '#000'
  }

  return (
    <Animated.View
      style={{
        transform: [
          {
            rotate:
              isEditable && !flat
                ? animatedValue.interpolate({
                    inputRange: [-1, 1],
                    outputRange: ['-0.1rad', '0.1rad'],
                  })
                : '0rad',
          },
        ],
      }}
    >
      <Base
        activeScale={flat ? 1 : scale}
        onPress={() => !flat && press()}
        as={flat ? TouchableOpacity : Base}
        onLongPress={() => !flat && longPress()}
        color={backgroundColor}
        shadow={shadow && !flat}
        flat={flat}
        {...props}
      >
        {checked && isEditable && !flat ? (
          <Check {...checkBoxProps} />
        ) : (
          icon && (
            <Icon
              name={icon}
              color={flat ? backgroundColor : color}
              size={30}
            />
          )
        )}

        {!flat && (
          <Options
            color={color}
            isDark={backgroundColor}
            faded={checked && isEditable}
            {...optionsProps}
          />
        )}

        <Title color={flat ? backgroundColor : color} {...titleProps}>
          {title}
        </Title>

        {gradient && !flat && (
          <Gradient
            color={color}
            faded={checked && isEditable}
            {...gradientProps}
          />
        )}
      </Base>
    </Animated.View>
  )
}
