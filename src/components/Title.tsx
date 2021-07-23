import React from 'react'
import { Text, StyleSheet, TextProps } from 'react-native'

interface TitleProps extends TextProps {
  readonly isSubTitle?: boolean
  readonly children: React.ReactText
}

export const Title = ({
  isSubTitle = false,
  children,
  style,
  ...props
}: TitleProps) => {
  return (
    // TODO update numberOfLines
    <Text
      style={StyleSheet.flatten([styles.title, style])}
      numberOfLines={1}
      {...props}
    >
      {children}
    </Text>
  )
}

const styles = StyleSheet.create({
  // ios12
  // title: {fontWeight: '600', color: '#fff'}

  title: {
    marginTop: 8,
    fontWeight: '700',
    color: '#fff',
  },
})
