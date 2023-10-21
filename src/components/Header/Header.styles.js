import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

export default styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 70,
        width: '100%',
        marginBottom: 20,
        marginTop: 0,
        backgroundColor: colors.red,
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