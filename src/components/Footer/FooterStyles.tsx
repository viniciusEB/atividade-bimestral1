import { StyleSheet } from 'react-native';
import { Colors } from '../../theme';

export const getStyles = (colors: Colors) =>
  StyleSheet.create({
    container: {
      width: '100%',
      backgroundColor: colors.primary,
      paddingVertical: 14,
      alignItems: 'center',
    },
    text: {
      color: colors.onPrimary,
      fontSize: 12,
    },
  });