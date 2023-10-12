import { StyleSheet } from 'react-native';
import { colors } from '../../../constants/colors';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: colors.red,
    },
    name: {
        fontSize: 18,
        fontFamily: 'PoppinsSemiBoldItalic',
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
        fontFamily: 'PoppinsItalic'
    },
});