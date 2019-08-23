import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import Color from 'color'

import { Theme } from '../interfaces'

import { Base, BlurLayer } from '../bases/Options'

export const Options = ({ color, faded, isDark, ...props }: Theme) => (
  <Base {...props}>
    <BlurLayer
      faded={faded}
      tint={Color(isDark).isDark() ? 'dark' : 'light'}
      intensity={60}
    >
      <Ionicons name="ios-more" color={color} size={22} />
    </BlurLayer>
  </Base>
)
