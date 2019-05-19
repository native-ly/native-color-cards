import React from 'react'
import { LinearGradient } from 'expo'
import styled from 'styled-components/native'
import Color from 'color'

import { darker, lighter } from '../helpers'

const Base = styled(LinearGradient)`
  border-radius: 10px;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
`

export const Gradient = ({ color }: { color: string }): JSX.Element => (
  <Base
    colors={Color(color).isDark() ? darker(color) : lighter(color)}
    start={[0.2, 0]}
    end={[0.8, 1]}
  />
)
