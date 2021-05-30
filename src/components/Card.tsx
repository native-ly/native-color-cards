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
  icon,
  onLongPress,
  optionsProps,
  scalable = true,
  shadow = false,
  subtitle = '',
  title = '',
  ...props
}: Props) => {
  const { editable, setEditable } = useContext(ListContext)

  const [checked, setChecked] = useState(false)

  const animatedValue = new Animated.Value(0)

  const press = () => {
    editable && setChecked(!checked)
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
        flex: 1,
        transform: [
          {
            rotate:
              editable && !flat
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
        {...props}
        activeScale={!scalable || flat ? 1 : 0.96}
        onPress={() => !flat && press()}
        as={flat ? TouchableOpacity : Base}
        onLongPress={() => !flat && !editable && longPress()}
        color={backgroundColor}
        shadow={shadow && !flat}
        flat={flat}
      >
        {icon && <Icon name={icon} color={color} size={30} />}

        {!flat &&
          (editable ? (
            <Check {...checkBoxProps} checked={checked} />
          ) : (
            <Options {...optionsProps} color={color} isDark={backgroundColor} />
          ))}

        <Info>
          {title ? (
            <Title isPrimary color={color} numberOfLines={2}>
              {title}
            </Title>
          ) : null}

          {subtitle && !flat ? (
            <Title numberOfLines={1} color={color}>
              {subtitle}
            </Title>
          ) : null}
        </Info>

        {gradient && !flat && (
          <Gradient
            {...gradientProps}
            color={color}
            faded={checked && editable}
          />
        )}
      </Base>
    </Animated.View>
  )
}
