import { useMemo } from 'react';
import { Animated, Pressable, Text } from 'react-native';
import { useTheme } from '../../ThemeContext';
import { useScaleAnimation } from '../../hooks/useScaleAnimation';
import { getStyles } from './ActionButtonStyles';

type Props = {
  title: string;
  onPress: () => void;
};

export default function ActionButton({ title, onPress }: Props) {
  const { colors } = useTheme();
  const styles = useMemo(() => getStyles(colors), [colors]);
  const { scale, ...handlers } = useScaleAnimation();

  return (
    <Animated.View style={[styles.wrapper, { transform: [{ scale }] }]}>
      <Pressable
        onPress={onPress}
        {...handlers}
        style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      >
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    </Animated.View>
  );
}