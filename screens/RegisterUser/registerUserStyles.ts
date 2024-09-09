import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
    alignItems: 'center'
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
  signInContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16
  },
  logoCynoia: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    marginBottom: 16
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16
  }
});
