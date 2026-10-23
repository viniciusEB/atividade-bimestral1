import { useRef } from 'react';
import { Animated } from 'react-native';

export function useScaleAnimation() {
  const scale = useRef(new Animated.Value(1)).current;

  const animateTo = (toValue: number) => {
    Animated.spring(scale, {
      toValue,
      useNativeDriver: false,
      speed: 40,
      bounciness: 8,
    }).start();
  };

  return {
    scale,
    onPressIn: () => animateTo(0.96),
    onPressOut: () => animateTo(1),
    onHoverIn: () => animateTo(1.03),
    onHoverOut: () => animateTo(1),
  };
}