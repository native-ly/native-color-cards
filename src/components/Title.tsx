import React from 'react'
import { StyleSheet, Text } from 'react-native'

import { Title as TitleProps } from '../interfaces'

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
      {
        left: 11,
        right: 11,
        color,
      },
      primary
        ? {
            fontWeight: '600',
            fontSize: 16,
          }
        : {
            marginTop: 4,
            opacity: 0.8,
            fontWeight: '500',
            fontSize: 12,
          },
    ])}
  >
    {children}
  </Text>
)
