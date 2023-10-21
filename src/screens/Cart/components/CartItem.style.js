import { StyleSheet } from 'react-native';
import { colors } from '../../../constants/colors';

export default styles = StyleSheet.create({
    container: {
        borderBottomWidth: 5,
    },
    image: {
        width: 50,
        height: 50,
    },
    details: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontFamily: 'PoppinsItalic',
        backgroundColor: colors.black
    },
    textCartItem:{
        color: colors.white,
        backgroundColor: colors.black,
        fontWeight: 'bold',
        fontSize: 15,
        fontFamily: 'PoppinsItalic'
    },
    textCartItemT:{
        color: colors.white,
        fontFamily: 'Arimo'
    }
});