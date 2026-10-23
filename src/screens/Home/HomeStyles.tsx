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
      paddingBottom: 24,
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
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 24,
    },
    titleHighlight: {
      color: colors.primary,
    },
    description: {
      width: '100%',
      color: colors.text,
      fontSize: 14,
      lineHeight: 22,
      marginTop: 16,
    },
    buttons: {
      width: '100%',
      marginTop: 24,
    },
    spacer: {
      height: 14,
    },
    sectionTitle: {
      color: colors.text,
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 32,
    },
    switchRow: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 16,
      marginBottom: 16,
    },
    switchLabel: {
      color: colors.text,
      fontSize: 14,
    },
  });