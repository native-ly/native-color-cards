import React from 'react'
import { StyleSheet, Text } from 'react-native'

import { Title as TitleProps } from '../interfaces'

// TODO
export const Title: React.FC<TitleProps> = ({
  color,
  children,
  primary = false,
  style,
  ...props
}) => (
  <Text
    {...props}
    style={StyleSheet.flatten([
      style,
      { color },
      styles.x,
      primary ? styles.y : styles.z,
    ])}
  >
    {children}
  </Text>
)

// TODO
const styles = StyleSheet.create({
  x: {
    left: 11,
    right: 11,
  },
  y: {
    fontWeight: '600',
    fontSize: 16,
  },
  z: {
    marginTop: 4,
    opacity: 0.8,
    fontWeight: '500',
    fontSize: 12,
  },
})
