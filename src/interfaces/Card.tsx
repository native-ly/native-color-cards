import { TouchableHighlightProps, TextProps } from 'react-native'

export interface Card extends TouchableHighlightProps {
  readonly backgroundColor: string
  readonly color: 'adjust' | 'contrast' | string
  readonly title: string
  readonly titleProps: TextProps
  readonly optionsProps: object
  readonly gradient: boolean
  readonly shadow: boolean
  readonly scalable: boolean
  readonly icon: string
}
