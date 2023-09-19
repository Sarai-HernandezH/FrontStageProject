import { StyleSheet } from 'react-native';
import { colors } from '../../../../constants/colors';

export default styles = StyleSheet.create({
    cardContainer:{
        marginHorizontal: 30,
        marginVertical: 10,
        minWidth: 90,
        width: '85%',
        height: 65,
        minHeight: 30,
        padding: 10,
        justifyContent: 'center',
        alignItems:'center',
    },
    text:{
        fontFamily: 'PoppinsSemiBoldItalic',
        color: colors.primary,
    }
})