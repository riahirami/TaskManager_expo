import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

/**
 * Contains all custom button component styles for phone
 */
export const styles = StyleSheet.create({
    container: {backgroundColor:colors.PRIMARY,
                borderRadius:8,
                padding:8,
                width:90,
                flexDirection:'row',
                justifyContent:'center',
                alignItems:'center'},

    title: {color:colors.WHITE,fontSize:12,textAlign:'center'},
    
    iconStyle:{tintColor:colors.WHITE}
});
