import React from 'react'

import { Base } from '../bases/Title'

import { Title as TitleProps } from '../interfaces'

export const Title = ({
  color,
  children,
  numberOfLines = 2,
  ...props
}: TitleProps) => (
  <Base color={color} numberOfLines={numberOfLines} {...props}>
    {children}
  </Base>
)
