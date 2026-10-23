import { StyleSheet } from 'react-native';
import { Colors } from '../../theme';

export const getStyles = (colors: Colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    scrollContent: {
      flexGrow: 1,
      justifyContent: 'space-between',
    },
    content: {
      alignItems: 'center',
      paddingTop: 56,
      paddingHorizontal: 24,
      paddingBottom: 32,
    },
    imageFrame: {
      width: '100%',
      marginTop: 24,
      padding: 4,
      borderWidth: 1.5,
      borderColor: colors.primary,
      borderRadius: 20,
    },
    profileImage: {
      width: '100%',
      aspectRatio: 1,
      borderRadius: 16,
    },
    title: {
      width: '100%',
      color: colors.text,
      fontSize: 28,
      fontWeight: 'bold',
      marginTop: 24,
      textAlign: 'center'
    },
    paragraph: {
      width: '100%',
      color: colors.text,
      fontSize: 15,
      lineHeight: 24,
      marginTop: 20,
    },
    button: {
      width: '100%',
      marginTop: 90,
    },
  }
  );