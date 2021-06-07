import React from 'react'
import { Text, StyleSheet } from 'react-native'

interface TitleProps {
  readonly isSubTitle?: boolean
}

export const Title: React.FC<TitleProps> = ({
  isSubTitle = false,
  children,
}) => {
  return (
    // TODO update numberOfLines
    <Text style={StyleSheet.flatten([styles.title])} numberOfLines={1}>
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
