import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';
import { fonts } from '../../utils/fonts';

export default StyleSheet.create({
    container:{backgroundColor:colors.WHITE,flex:1},
    headerContainer:{
        marginTop:12,
        marginHorizontal:12,
        flexDirection:'row',
        justifyContent:"space-between",
        alignItems:'center'
    },
    detailsContainer:{
        padding:12,
        marginTop:12
    },
    label:{
        fontSize:14,
        marginBottom:8,
        fontFamily: fonts.INTER_REGULAR

    },
    titleText:{
        fontSize:18,
        marginBottom:12,
        fontFamily: fonts.LORA_700
    },
    descriptionText:{
        fontSize:16,
        marginBottom:12
    },
    switchContainer:{flexDirection:"row", 
        gap:12, justifyContent:"center", alignItems:"center", padding:12},
});