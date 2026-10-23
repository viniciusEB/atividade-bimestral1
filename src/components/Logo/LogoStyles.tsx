import { StyleSheet } from 'react-native';
import { Colors } from '../../theme';

export const getStyles = (colors: Colors) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 6,
    },
    text: {
      color: colors.text,
      fontSize: 20,
      fontWeight: 'bold',
      letterSpacing: 1,
    },
  });