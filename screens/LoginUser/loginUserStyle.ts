import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16
  },
  logoCynoia: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    marginBottom: 16
  },
  input: {
    height: 40,
    borderColor: colors.GREY_LIGHT,
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8
  },
  error: {
    color: colors.RED,
    marginBottom: 8
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
    alignItems: 'center'
  }
});
