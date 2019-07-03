import Color from 'color'

export const checkColor = (item: string): string => {
  return Color(item).isDark()
    ? Color(item)
        .lighten(0.5)
        .toString()
    : Color(item)
        .darken(0.5)
        .toString()
}

export const darker = (item: string): [string, string] => [
  'transparent',
  Color(item)
    .darken(0.5)
    .alpha(0.3)
    .toString(),
]

export const lighter = (item: string): [string, string] => [
  Color(item)
    .lighten(0.5)
    .alpha(0.3)
    .toString(),
  'transparent',
]
