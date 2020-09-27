import React from 'react'
import { StyleSheet } from 'react-native'
import Color from 'color'

import { LinearGradient } from '../imports'

import { Theme } from '../interfaces'

import { darker, lighter } from '../helpers'

const GRADIENT_START = [0.2, 0]
const GRADIENT_END = [0.8, 1]

// TODO
export const Gradient = ({ color, faded, style, ...props }: Theme) => {
  // TODO
  const newLocal = faded
    ? ['#fff4', '#fff4']
    : Color(color).isDark()
    ? darker(color)
    : lighter(color)

  return (
    <LinearGradient
      {...props}
      start={GRADIENT_START}
      end={GRADIENT_END}
      colors={newLocal}
      style={StyleSheet.flatten([style, styles.gradient])}
    />
  )
}

// TODO
const styles = StyleSheet.create({
  gradient: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 10,
    zIndex: -1,
  },
})
