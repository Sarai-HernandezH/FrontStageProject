import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

export default styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%',
        padding: 10,
    },
    input:{
        color: 'white',
        backgroundColor: colors.secondary,
        borderRadius: 8,
        padding: 18,
        borderWidth: 1,
        borderColor: colors.tertiary,
        width: '80%',
        fontSize: 20,
    },
})