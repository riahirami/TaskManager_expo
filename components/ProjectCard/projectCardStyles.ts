import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

export default StyleSheet.create({

    cardContainer: {
        padding: 10,
        margin: 10,
        borderWidth: 1,
        borderColor: colors.GREY_LIGHT,
        borderRadius: 10,
        backgroundColor: colors.GREY_LIGHT,
    },
    projectName: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    projectDescription: {
        fontSize: 16,
    },
    projectItem: {
        margin: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        backgroundColor: 'white',
    },
    container: {
        flex: 1,
        padding: 10,
    },
    innerContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 6,
    },
});