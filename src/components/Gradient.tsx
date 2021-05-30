import React from 'react'

import { LinearGradient } from '../imports'

const GRADIENT_START = [0.2, 0]
const GRADIENT_END = [0.8, 1]

export const Gradient = () => {
  return (
    <LinearGradient
      // TODO
      start={GRADIENT_START}
      end={GRADIENT_END}
      colors={null}
    />
  )
}
