import React, { useCallback, useMemo, useState } from 'react'
import TouchableScale from 'react-native-touchable-scale'
import { Animated, View, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'native-icons'

import { Gradient } from './Gradient'
import { useTheme } from '../hooks/useTheme'
import { Title } from './Title'
import { Options } from './Options'
// import { Haptics } from '../imports'

// TODO extends item§
interface CardProps {
  readonly iconComponent: any
  readonly renderIcon: any
  readonly toolsComponent: any
  readonly renderTools: any
  readonly titleComponent: any
  readonly renderTitle: any
  readonly subTitleComponent: any
  readonly renderSubTitle: any
}

export const Card = ({
  title,
  subtitle,
  icon,
  color,
  flat = true,
  gradient = true,
  onLongPress,
}: CardProps) => {
  // const {} = useTheme();

  const [scale, setScale] = useState(0.96)

  const animatedValue = new Animated.Value(0)

  const isSubTitleAvailable = useMemo(() => {}, [])
  const isOptionsAvailable = useMemo(() => {}, [])
  const isCheckBoxAvailable = useMemo(() => {}, [])
  const isGradientAvailable = useMemo(() => {}, [])

  const animateShake = useMemo(() => {
    // return editable && !flat
  }, [])

  const handlePress = useCallback(() => {
    // if (editable) {
    // setChecked((prevState) => !prevState)
    // }
    //
    // setScale(scalable ? 0.96 : 1)
  }, [])

  const handleLongPress = useCallback(() => {
    // setEditable(true)

    // Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)

    onLongPress()
  }, [])

  const animation = animatedValue.interpolate({
    inputRange: [-1, 1],
    outputRange: ['-0.06rad', '0.06rad'],
  })

  // animations(animatedValue)

  // if (color === 'adjust') {
  //   color = checkColor(backgroundColor)
  // } else if (color === 'contrast') {
  //   color = Color(backgroundColor).isDark() ? '#fff' : '#000'
  // }

  return (
    <Animated.View
    // TODO
    // style={{
    //   transform: [
    //     {
    //       rotate:
    //         animateShake
    //           ? animation
    //           : '0rad',
    //     },
    //   ],
    // }}
    >
      <TouchableScale
        activeScale={flat ? 1 : scale}
        onPress={() => flat && handlePress()}
        onLongPress={() => !flat && handleLongPress()}
        style={StyleSheet.flatten([styles.card, { backgroundColor: color }])}
        disabled // TODO
      >
        {icon && (
          <Icon
            name={icon}
            type="ionicons"
            color="#fff"
            size={20}
            // size={30}
            style={styles.icon}
          />
        )}

        {/* {!flat &&
          (editable ? (
            checked && <Check {...checkBoxProps} />
          ) : (
            <Options color={color} isDark={backgroundColor} {...optionsProps} />
          ))} */}
        {/* Icon */}
        {/* Options/CheckBox */}
        {/* <Options /> */}

        {/* TODO */}
        <View style={{ marginHorizontal: 6 }}>
          {title ? <Title>{title}</Title> : null}
          {/* Title */}
          {/* SubTitle */}
          {/* {isSubTitleAvailable ? <Title>{subtitle}</Title> : null} */}
        </View>

        {/* Gradient */}
        {/* TODO */}
        {gradient && <Gradient color="#fff" faded={false} />}
      </TouchableScale>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  icon: {
    width: 28,
    // marginTop: -2,
    textAlign: 'center',
  },
  // ios12
  // card: {
  //   flexDirection:'row',
  //   alignItems: 'center',
  //   backgroundColor: 'red',
  //   paddingHorizontal: 4,
  //   paddingVertical: 8,
  //   borderRadius: 6,
  //   // width: 200
  // }

  // -----
  card: {
    width: 320 / 2 - 10, // TODO
    height: 88 - 20, // TODO
    // backgroundColor: 'red',
    // flex: 1,
    // width:'100%',
    paddingHorizontal: 6,
    paddingVertical: 8,
    borderRadius: 12,
  },
})
