import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

export default StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.GREY_LIGHT,
      },
      modalContent: {
        width: '80%',
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        shadowColor: colors.GREY_200,
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      input: {
        borderBottomWidth: 1,
        marginBottom: 15,
        padding: 8,
        width: '100%',
      },
      buttonContainer:{
        flexDirection:'row',
        justifyContent:'center',
        gap:12,
        marginTop:10
      },
      errorText: {
        color: colors.RED,
        fontSize: 12,
        marginTop: 5,
      },
});