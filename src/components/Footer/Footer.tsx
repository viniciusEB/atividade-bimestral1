import { useMemo } from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '../../ThemeContext';
import { getStyles } from './FooterStyles';

export default function Footer() {
  const { colors } = useTheme();
  const styles = useMemo(() => getStyles(colors), [colors]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Desenvolvido por Matheus.</Text>
      <Text style={styles.text}>Projeto fictício sem fins comerciais.</Text>
    </View>
  );
}