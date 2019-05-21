import React from 'react'
import styled from 'styled-components/native'

import { Title as TitleProps } from '../interfaces'

const Base = styled.Text<{ color: string }>`
  margin-top: -2px;
  color: ${({ color }) => color};
  font-weight: 600;
  font-size: 17px;
  position: absolute;
  bottom: 9px;
  left: 11px;
  right: 11px;
`

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
