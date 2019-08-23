import React from 'react'
import Color from 'color'

import { Base } from '../bases/Gradient'

import { Theme } from '../interfaces'

import { darker, lighter } from '../helpers'

export const Gradient = ({ color, faded }: Theme) => (
  <Base
    start={[0.2, 0]}
    end={[0.8, 1]}
    colors={
      faded
        ? ['#fff4', '#fff4']
        : Color(color).isDark()
        ? darker(color)
        : lighter(color)
    }
  />
)
