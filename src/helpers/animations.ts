import { Animated, Easing } from 'react-native'

export const animations = (animatedValue: Animated.Value) => {
  Animated.loop(
    Animated.sequence([
      Animated.timing(animatedValue, {
        toValue: 0.3,
        duration: 100,
        easing: Easing.bounce,
        useNativeDriver: true,
      }),
      Animated.timing(animatedValue, {
        toValue: -0.3,
        duration: 100,
        easing: Easing.bounce,
        useNativeDriver: true,
      }),
      Animated.timing(animatedValue, {
        toValue: 0.0,
        duration: 100,
        easing: Easing.bounce,
        useNativeDriver: true,
      }),
    ])
  ).start()
}
