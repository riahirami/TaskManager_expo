import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 10,
        gap:32,
        backgroundColor:  colors.GREY_100,
    },
});