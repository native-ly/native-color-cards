import React, { useMemo } from 'react'
import Color from 'color'

import { LinearGradient } from '../imports'
import { darker, lighter } from '../helpers/colors'

const GRADIENT_START = [0.2, 0]
const GRADIENT_END = [0.8, 1]

// TODO use pick
interface GradientProps {
  readonly color: string
  readonly faded: boolean
}

export const Gradient = ({ color, faded }: GradientProps) => {
  const gradientColors = useMemo(() => {
    if (faded) {
      return ['#fff4', '#fff4'] // TODO
    }

    if (Color(color).isDark()) {
      return darker(color)
    }

    return lighter(color)
  }, [])

  return (
    <LinearGradient
      // TODO
      start={GRADIENT_START}
      end={GRADIENT_END}
      colors={gradientColors}
    />
  )
}
