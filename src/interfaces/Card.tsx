import { TextProps, TouchableOpacityProps, ViewProps } from 'react-native'
import { LinearGradient } from 'expo'

export interface Card {
  readonly backgroundColor: string
  readonly color?: 'adjust' | 'contrast' | string
  readonly title?: string
  readonly titleProps?: TextProps
  readonly optionsProps?: TouchableOpacityProps
  readonly gradientProps?: LinearGradient
  readonly checkBoxProps?: ViewProps
  readonly gradient?: boolean
  readonly shadow?: boolean
  readonly scalable?: boolean
  readonly icon?: string
  readonly flat?: boolean
  readonly onLongPress: () => void
  readonly finishEdit?: boolean
}
