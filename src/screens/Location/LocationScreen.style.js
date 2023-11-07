import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

export default styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageBackground: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    locationText:{
        fontFamily: 'Arimo',
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        color: colors.red,
        marginBottom: 50
    },
    withoutLocationText:{
        fontFamily: 'Arimo',
        fontSize: 15,
        width: "100px",
        height: "100px",
        borderWidth: 2,
        padding: 10,
        borderColor: colors.red,
        color: colors.red,
        backgroundColor: colors.black,
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom: 50,
    },

});