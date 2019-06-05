import { TouchableOpacityProps, ViewProps } from 'react-native'
import { LinearGradientProps } from 'expo'

import { Color } from '../types'

export interface Card {
  readonly backgroundColor: string
  readonly checkBoxProps?: ViewProps
  readonly color?: Color
  readonly flat?: boolean
  readonly gradient?: boolean
  readonly gradientProps?: LinearGradientProps
  readonly icon?: string
  readonly onLongPress: () => void
  readonly optionsProps?: TouchableOpacityProps
  readonly scalable?: boolean
  readonly shadow?: boolean
  readonly subtitle?: string
  readonly title?: string
}
