import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';


export const overlayStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.BLACK,
    opacity: 0.2,
    zIndex: 999,
    elevation: 2
  }
});
