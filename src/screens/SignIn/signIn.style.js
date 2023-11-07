import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

export default styles = StyleSheet.create({
    container:{
        flex:1,
    },
    loginContainer:{
        width: '100%',
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    inputEmail:{
        width: '95%',
        height: 40,
        paddingTop:20,
        paddingLeft:10,
        backgroundColor: colors.grey,
        marginVertical: 15,
        justifyContent: 'center',
        alignItems: 'center',
        color: colors.white,
        borderRadius: 5,
    },
    loginButton: {
        backgroundColor: colors.grey,
        width: '50%',
        height: 50,
        borderRadius: 10,
        marginBottom: 15,
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginText:{
        color: colors.white,
        textAlign: 'center',
        fontFamily: 'Arimo',
        fontSize: 18,
        fontWeight: 'bold',
    },
    loginText1:{
        color: colors.white,
        textAlign: 'center',
        fontFamily: 'Arimo',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop:70,
    },
    signInText:{
        fontFamily: 'Arimo',
        color: colors.black,
        fontSize: 17,
        marginBottom: -10,
        fontWeight: 'bold',
    },
});