import React, { useState, useEffect } from 'react'
import { Animated, Easing } from 'react-native'
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
  const [checked, setChecked] = useState<boolean>(false)
  const [scale, setScale] = useState<number>(0.96)

  const animatedValue = new Animated.Value(0)

  const press = () => {
    setChecked(!checked)
    setScale(scalable ? 0.96 : 1)

    Haptic.selection()
  }

  const longPress = (startEditable: any) => {
    startEditable(true)

    onLongPress()
  }

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animatedValue, {
          toValue: 0.3,
          duration: 100,
          easing: Easing.quad,
          useNativeDriver: true,
        }),
        Animated.timing(animatedValue, {
          toValue: -0.3,
          duration: 100,
          easing: Easing.quad,
          useNativeDriver: true,
        }),
        Animated.timing(animatedValue, {
          toValue: 0.0,
          duration: 100,
          easing: Easing.quad,
          useNativeDriver: true,
        }),
      ])
    ).start()
  }, [])

  if (color === 'adjust') {
    color = checkColor(backgroundColor)
  } else if (color === 'contrast') {
    color = Color(backgroundColor).isDark() ? '#fff' : '#000'
  }

  return (
    <ListContext.Consumer>
      {({ startEditable, isEditable }) => (
        <Animated.View
          style={{
            transform: [
              {
                rotate: isEditable
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
            activeScale={scale}
            onPress={() => press()}
            onLongPress={() => longPress(startEditable)}
            color={backgroundColor}
            shadow={shadow}
            flat={flat}
            {...props}
          >
            {checked && isEditable ? (
              <Check {...checkBoxProps} />
            ) : (
              icon && <Icon name={icon} color={color} size={30} />
            )}

            <Options
              color={color}
              isDark={backgroundColor}
              faded={checked && isEditable}
              {...optionsProps}
            />

            <Title color={color} {...titleProps}>
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
      )}
    </ListContext.Consumer>
  )
}
