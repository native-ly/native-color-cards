import Color from 'color'

export const checkColor = (item: string): string => {
  const color = Color(item)

  return color[color.isDark() ? 'lighten' : 'darken'](0.5).toString()
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
