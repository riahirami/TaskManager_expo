import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

export default StyleSheet.create({
    container :{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:32,
        backgroundColor:colors.PRIMARY_20,
    },
    text:{
        fontSize:16,
        color:colors.BLACK
    }
});