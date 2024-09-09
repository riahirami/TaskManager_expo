import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';
import { fonts } from '../../utils/fonts';

export default StyleSheet.create({
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6
  },
  cardContainer: {
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: colors.GREY_LIGHT,
    borderRadius: 10,
    backgroundColor: colors.GREY_LIGHT
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 8
  },
  taskDetailsContainer: { flex: 1, gap: 12 },
  taskName: {
    fontFamily: fonts.INTER_REGULAR,
    fontSize: 20,
    fontWeight: 'bold'
  },
  taskDescription: {
    fontFamily: fonts.INTER_NORMAL,
    fontSize: 16
  },
  statusText: {
    fontSize: 16,
    fontFamily: fonts.INTER_BOLD
  },
  projectItem: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    backgroundColor: 'white'
  }
});
