import {StyleSheet} from 'react-native'
import { colors } from '../../../src/constants/colors';

export default styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    detailsContainer:{
        flex:1,
        height: '100%'
    },
    imageBackground: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    title:{
        fontSize: 18,
        fontFamily: 'PoppinsSemiBoldItalic',
        textAlign: 'center',        
        color: colors.white,
        backgroundColor: colors.black,
        marginHorizontal: 50,
        borderRadius: 7,
        marginBottom: 15,
        marginTop: 10,
    },
    textDescription:{
        fontFamily: 'PoppinsSemiBoldItalic',
        fontSize: 13,
        marginHorizontal: 20,
        color: colors.white,
        backgroundColor: colors.black,
        borderRadius: 7,
        
    },
    messageContainer:{
        backgroundColor: colors.black,
        alignSelf: 'center',
        borderRadius: 7,
        marginBottom: 80,
    },
    messageText:{
        fontFamily: 'Arimo',
        fontWeight: 'bold',
        color: colors.red,
        fontSize: 18,
        padding: 10,
    },
    image:{
        height:'100%',
        width:'100%',
        alignSelf:'center',
        borderRadius:5,
    },
    price:{
        fontSize:18,
        fontWeight: 'bold',
        marginVertical: 10,
        marginLeft:10,
        color: colors.white,
    },
    addToCartButton:{
        backgroundColor: colors.black,
        height: 40,
        width: '50%',
        alignSelf: 'center',
        borderRadius: 10,
    },
    addText:{
        fontSize: 20,
        fontFamily: 'Arimo',
        color: colors.red,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginTop: 10,
    }
})