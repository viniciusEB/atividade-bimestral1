import { useMemo } from 'react';
import { Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from '../../ThemeContext';
import { getStyles } from './LogoStyles';

export default function Logo() {
  const { colors } = useTheme();
  const styles = useMemo(() => getStyles(colors), [colors]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>DEV.SPOT</Text>
      <MaterialCommunityIcons
        name="star-four-points-outline"
        size={34}
        color={colors.primary}
      />
    </View>
  );
}