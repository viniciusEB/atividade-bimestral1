import { StyleSheet } from 'react-native';
import { Colors } from '../../theme';

export const getStyles = (colors: Colors) =>
  StyleSheet.create({
    wrapper: {
      width: '100%',
    },
    button: {
      width: '100%',
      backgroundColor: colors.primary,
      borderRadius: 10,
      paddingVertical: 16,
      alignItems: 'center',
    },
    pressed: {
      opacity: 0.8,
    },
    text: {
      color: colors.onPrimary,
      fontSize: 16,
      fontWeight: '600',
    },
  });