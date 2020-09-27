import React from 'react'
import {
  TouchableOpacity,
  TouchableNativeFeedback,
  StyleSheet,
} from 'react-native'
import Icon from 'native-icons'
import Color from 'color'

import { BlurView } from '../imports'

import { Theme } from '../interfaces'

// TODO
export const Options: React.FC<Theme> = ({
  color,
  faded,
  dark,
  style,
  ...props
}) => {
  // TODO
  const newLocal = Color(dark).isDark() ? 'dark' : 'light'

  return (
    <TouchableOpacity {...props} style={StyleSheet.flatten([style, styles.x])}>
      <BlurView
        // faded={faded}
        intensity={60}
        tint={newLocal}
        style={styles.y}
      >
        <Icon
          // name="ios-more"
          // type=""
          // name=""
          color={color}
          size={22}
          style={styles.z}
        />
      </BlurView>
    </TouchableOpacity>
  )
}

// TODO
const styles = StyleSheet.create({
  x: {
    position: 'absolute',
    zIndex: 100,
    right: 11,
    top: 9,
  },
  y: {
    borderRadius: 13,
  },
  z: {
    paddingTop: 2,
  },
})
