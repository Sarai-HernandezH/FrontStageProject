import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

export default styles = StyleSheet.create({
    container:{
        backgroundColor: colors.secondary,
        height: 80,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{
        fontSize: 30,
        fontFamily: 'Arimo',
    },
    logo:{
        width:50,
        height:45,
    },
})