import React from 'react'
import { TouchableOpacity, TouchableNativeFeedback } from 'react-native'
import Icon from 'native-icons'
import Color from 'color'

import { BlurView } from '../imports'

import { Theme } from '../interfaces'

export const Options: React.FC<Theme> = ({ color, faded, dark, ...props }) => (
  <TouchableOpacity
    {...props}
    style={{
      position: 'absolute',
      zIndex: 100,
      right: 11,
      top: 9,
    }}
  >
    <BlurView
      // faded={faded}
      intensity={60}
      tint={Color(dark).isDark() ? 'dark' : 'light'}
      style={{ borderRadius: 13 }}
    >
      <Icon
        // name="ios-more"
        // type=""
        // name=""
        color={color}
        size={22}
        style={{ paddingTop: 2 }}
      />
    </BlurView>
  </TouchableOpacity>
)
