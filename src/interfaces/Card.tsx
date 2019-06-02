import { TextProps, TouchableOpacityProps, ViewProps } from 'react-native'
import { LinearGradientProps } from 'expo'

import { Color } from '../types'

export interface Card {
  readonly backgroundColor: string
  readonly color?: Color
  readonly title?: string
  readonly titleProps?: TextProps
  readonly optionsProps?: TouchableOpacityProps
  readonly gradientProps?: LinearGradientProps
  readonly checkBoxProps?: ViewProps
  readonly gradient?: boolean
  readonly shadow?: boolean
  readonly scalable?: boolean
  readonly icon?: string
  readonly flat?: boolean
  readonly onLongPress: () => void
  readonly finishEdit?: boolean
}
