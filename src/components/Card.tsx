import React, { useState, useContext } from 'react'
import { Animated, TouchableOpacity, View } from 'react-native'
import TouchableScale from 'react-native-touchable-scale'
import Icon from 'native-icons'
import Color from 'color'

import { Title } from './Title'
import { Options } from './Options'
import { Gradient } from './Gradient'
import { CheckBox } from './CheckBox'

import { animations, checkColor } from '../helpers'

import { Card as Props } from '../interfaces'

import { ListContext } from '../context'

export const Card: React.FC<Props> = ({
  backgroundColor,
  checkBoxProps,
  color = 'adjust',
  flat = false,
  gradient = false,
  gradientProps,
  icon,
  onLongPress,
  optionsProps,
  scalable = true,
  shadow = false,
  subtitle = '',
  title = '',
  ...props
}) => {
  const { editable, setEditable } = useContext(ListContext)

  const [checked, setChecked] = useState(false)

  // const animatedValue = new Animated.Value(0)

  // const press = () => {
  //   if (editable) {
  //     setChecked(!checked)
  //   }
  // }

  // const longPress = () => {
  //   setEditable(true)

  //   Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)

  //   onLongPress()
  // }

  // animations(animatedValue)

  if (color === 'adjust') {
    color = checkColor(backgroundColor)
  } else if (color === 'contrast') {
    color = Color(backgroundColor).isDark() ? '#fff' : '#000'
  }

  return (
    <Animated.View
    // style={{
    //   flex: 1,
    //   transform: [
    //     {
    //       rotate:
    //         editable && !flat
    //           ? animatedValue.interpolate({
    //               inputRange: [-1, 1],
    //               outputRange: ['-0.06rad', '0.06rad'],
    //             })
    //           : '0rad',
    //     },
    //   ],
    // }}
    >
      <TouchableScale
        {...props}
        activeScale={!scalable || flat ? 1 : 0.96}
        // onPress={() => !flat && press()}
        // as={flat ? TouchableOpacity : Base}
        // onLongPress={() => !flat && !editable && longPress()}
        color={backgroundColor}
        shadow={shadow && !flat}
        flat={flat}
      >
        {icon && <Icon name={icon} color={color} size={30} />}

        {!flat &&
          (editable ? (
            <CheckBox {...checkBoxProps} checked={checked} />
          ) : (
            <Options
              {...optionsProps}
              color={color}
              //  dark={backgroundColor}
            />
          ))}

        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            position: 'absolute',
            width: '100%',
            height: 70,
            bottom: 8,
            left: 0,
          }}
        >
          {!!title && (
            <Title primary color={color} numberOfLines={2}>
              {title}
            </Title>
          )}

          {!!subtitle && !flat && (
            <Title numberOfLines={1} color={color}>
              {subtitle}
            </Title>
          )}
        </View>

        {gradient && !flat && (
          <Gradient
            {...gradientProps}
            color={color}
            // faded={checked && editable}
          />
        )}
      </TouchableScale>
    </Animated.View>
  )
}
