import React from 'react'
import { Ionicons } from '@expo/vector-icons'

import { Base, BlurLayer } from '../bases/Options'

export const Options = ({
  color,
  faded,
  ...props
}: {
  color: string
  faded: boolean
}): JSX.Element => {
  return (
    <Base {...props}>
      <BlurLayer
        faded={faded}
        intensity={60}
      >
        <Ionicons name="ios-more" color={color} size={22} />
      </BlurLayer>
    </Base>
  )
}
