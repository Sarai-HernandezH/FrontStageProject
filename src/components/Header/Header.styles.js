import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

export default styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: colors.red,
        height: 70,
        width: '100%',
        marginBottom: 30,
        marginTop: 0,
        },
    buttonExit:{
        marginTop: 20,
        marginBottom:25,
    },
    text:{
        fontSize: 30,
        fontFamily: 'Arimo',
        marginTop: 18,
        fontWeight: 'bold',
        marginRight: 20,
    },
})