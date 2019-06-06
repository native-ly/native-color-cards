import React, { useState, useContext } from 'react'
import { Animated, TouchableOpacity } from 'react-native'
import * as Haptics from 'expo-haptics'
import Color from 'color'

import { Title } from './Title'
import { Options } from './Options'
import { Gradient } from './Gradient'
import { Check } from './CheckBox'

import { animations, checkColor } from '../helpers'

import { Card as Props } from '../interfaces'

import { ListContext } from '../context'

import { Base, Info } from '../bases/Card'
import { Icon } from '../bases/Icon'

export const Card = ({
  backgroundColor,
  checkBoxProps,
  color = 'adjust',
  flat = false,
  gradient = false,
  gradientProps,
  icon = 'ios-car',
  onLongPress,
  optionsProps,
  scalable = true,
  shadow = false,
  subtitle = '',
  title = '',
  ...props
}: Props): JSX.Element => {
  const { editable, setEditable } = useContext(ListContext)

  const [checked, setChecked] = useState<boolean>(false)
  const [scale, setScale] = useState<number>(0.96)

  const animatedValue = new Animated.Value(0)

  const press = () => {
    editable && setChecked(!checked)
    setScale(scalable ? 0.96 : 1)
  }

  const longPress = () => {
    setEditable(true)

    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)

    onLongPress()
  }

  animations(animatedValue)

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
                    outputRange: ['-0.06rad', '0.06rad'],
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
        {icon && <Icon name={icon} color={color} size={30} />}

        {!flat &&
          (editable ? (
            checked && <Check {...checkBoxProps} />
          ) : (
            <Options color={color} isDark={backgroundColor} {...optionsProps} />
          ))}

        <Info>
          {title && (
            <Title isPrimary color={color} numberOfLines={2}>
              {title}
            </Title>
          )}

          {subtitle && !flat && (
            <Title numberOfLines={1} color={color}>
              {subtitle}
            </Title>
          )}
        </Info>

        {gradient && !flat && (
          <Gradient
            color={color}
            faded={checked && editable}
            {...gradientProps}
          />
        )}
      </Base>
    </Animated.View>
  )
}
