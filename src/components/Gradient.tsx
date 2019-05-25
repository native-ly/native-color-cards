import React from 'react'
import Color from 'color'

import { Base } from '../bases/Gradient'

import { darker, lighter } from '../helpers'

export const Gradient = ({ color }: { color: string }): JSX.Element => (
  <Base
    colors={Color(color).isDark() ? darker(color) : lighter(color)}
    start={[0.2, 0]}
    end={[0.8, 1]}
  />
)
