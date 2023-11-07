import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

export default styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: colors.grey,
        marginTop: 0,
        width: '100%'
    },
    imageBackground: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    textCart:{
        color: colors.white,
        fontFamily: 'Arimo',
        fontWeight: 'bold',
        fontSize: 20,
    },
    textConfirm:{
        backgroundColor: colors.black,
        borderRadius: 5,
        color: colors.red,
        fontFamily: 'Arimo',
        fontWeight: 'bold',
        fontSize: 20,
        marginHorizontal: '100px',
        padding: 10,
        alignSelf: 'center',
        width: '50px'
    }
});