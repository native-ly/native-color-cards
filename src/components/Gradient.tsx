import React from 'react'
import { StyleSheet } from 'react-native'
import Color from 'color'

import { LinearGradient } from '../imports'

import { Theme } from '../interfaces'

import { darker, lighter } from '../helpers'

export const Gradient: React.FC<Theme> = ({
  color,
  faded,
  style,
  ...props
}) => (
  <LinearGradient
    {...props}
    start={[0.2, 0]}
    end={[0.8, 1]}
    colors={
      faded
        ? ['#fff4', '#fff4']
        : Color(color).isDark()
        ? darker(color)
        : lighter(color)
    }
    style={StyleSheet.flatten([
      style,
      {
        ...StyleSheet.absoluteFillObject,
        borderRadius: 10,
        zIndex: -1,
      },
    ])}
  />
)
