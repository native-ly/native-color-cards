import React from 'react'

import { Base } from '../bases/Title'

import { Title as TitleProps } from '../interfaces'

export const Title = ({
  color,
  children,
  isPrimary = false,
  ...props
}: TitleProps) => (
  <Base {...props} color={color} isPrimary={isPrimary}>
    {children}
  </Base>
)
