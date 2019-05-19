import React from 'react'
import styled from 'styled-components/native'
import { View, Dimensions } from 'react-native'
import TouchableScale from 'react-native-touchable-scale'
import { Ionicons } from '@expo/vector-icons'
import Color from 'color'

import { Title } from './Title'
import { Options } from './Options'
import { Gradient } from './Gradient'

import { checkColor } from '../helpers'

import { Card as Props } from '../interfaces'

const Base = styled(TouchableScale)`
  ${({ color, shadow }) => `
    border-radius: 10px;
    width: ${Dimensions.get('window').width / 2 - 25};
    padding: 9px 11px;
    margin: 6px;
    background-color: ${color};
    height: 88px;

    ${
      shadow
        ? `
        shadow-opacity: 0.75;
        shadow-radius: 5px;
        shadow-color: ${color};
        shadow-offset: 0 0;
      `
        : ``
    }
  `}
`

const Icon = styled(Ionicons)`
  margin-top: -2px;
`

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
