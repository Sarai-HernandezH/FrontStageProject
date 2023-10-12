import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

export default styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: colors.white,
        marginTop: 20,
    },
    loginContainer:{
        width: '100%',
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputEmail:{
        width: '95%',
        height: 30,
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
        color: colors.black,
        alignSelf: 'center',
        fontFamily: 'Arimo',
        fontSize: 18,
        fontWeight: 'bold',
    },
    signInText:{
        fontFamily: 'Arimo',
        color: colors.black,
        fontSize: 15,
        marginBottom: -10,
    }
});