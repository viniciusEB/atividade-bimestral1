import { StyleSheet } from 'react-native';
import { Colors } from '../../theme';

export const getStyles = (colors: Colors) =>
  StyleSheet.create({
    wrapper: {
      width: '100%',
      marginBottom: 14,
    },
    button: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 12,
      borderWidth: 1.5,
      borderColor: colors.primary,
      borderRadius: 10,
      paddingVertical: 14,
    },
    pressed: {
      backgroundColor: colors.surface,
    },
    text: {
      color: colors.text,
      fontSize: 16,
      fontWeight: '600',
    },
  });