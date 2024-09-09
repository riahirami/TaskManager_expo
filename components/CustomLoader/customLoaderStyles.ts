import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';
import { LOADER_POPUP_BORDER_RADIUS, LOADER_POPUP_SIZE } from '../../utils/constants';

export default StyleSheet.create({
  loaderContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
    elevation: 2
  },
  loader: {
    backgroundColor: colors.WHITE,
    width: LOADER_POPUP_SIZE,
    height: LOADER_POPUP_SIZE,
    borderRadius: LOADER_POPUP_BORDER_RADIUS,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
