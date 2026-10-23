import { ComponentProps, useMemo } from 'react';
import { Animated, Pressable, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useTheme } from '../../ThemeContext';
import { useScaleAnimation } from '../../hooks/useScaleAnimation';
import { getStyles } from './SocialButtonStyles';

type Props = {
  title: string;
  icon: ComponentProps<typeof FontAwesome5>['name'];
  onPress: () => void;
};

export default function SocialButton({ title, icon, onPress }: Props) {
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
        <FontAwesome5 name={icon} size={20} color={colors.primary} />
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    </Animated.View>
  );
}