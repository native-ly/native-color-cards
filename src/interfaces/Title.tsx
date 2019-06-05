import { ReactNode } from 'react'
import { TextProps } from 'react-native'

export interface Title extends TextProps {
  readonly color: string
  readonly children: ReactNode
}
