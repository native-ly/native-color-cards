import React, { Component } from 'react'
import { View, Animated, Easing } from 'react-native'
import Color from 'color'

import { Title } from './Title'
import { Options } from './Options'
import { Gradient } from './Gradient'
import { Check } from './CheckBox'

import { checkColor } from '../helpers'

import { Card as Props } from '../interfaces'

export const Card = ({
  backgroundColor,
  color = 'adjust',
  title = '',
  titleProps = {},
  optionsProps = {},
  gradient = false,
  shadow = false,
  scalable = true,
  icon = 'ios-car',
  ...props
}: Props): JSX.Element => {
  if (color === 'adjust') {
    color = checkColor(backgroundColor)
  } else if (color === 'contrast') {
    color = Color(backgroundColor).isDark() ? '#fff' : '#000'
  }

  return (
    <Base
      activeScale={0.96}
      as={scalable ? Base : View}
      color={backgroundColor}
      shadow={shadow}
      {...props}
    >
      {icon && <Icon name={icon} color={color} size={30} />}

      <Options color={color} {...optionsProps} />

      <Title color={color} {...titleProps}>
        {title}
      </Title>

      {gradient && <Gradient color={color} />}
    </Base>
  )
}
