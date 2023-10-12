import {StyleSheet} from 'react-native'
import { colors } from '../../../src/constants/colors';

export default styles = StyleSheet.create({
    container:{
        flex: 1,
        height: '100%',
        backgroundColor: colors.grey,
    },
    title:{
        fontSize: 18,
        fontFamily: 'PoppinsSemiBoldItalic',
        textAlign: 'center'
    },
    textDescription:{
        fontFamily: 'PoppinsSemiBoldItalic',
        fontSize: 13,
        marginHorizontal: 10,
        
    },
    imageContainer: {
        justifyContent: 'center',
        height: '45%',
        width: '100%',
        alignSelf: 'center',
    },
    image:{
        height:'100%',
        width:'80%',
        alignSelf:'center'
    },
    price:{
        fontSize:18,
        fontWeight: 'bold',
        marginVertical: 10,
        marginLeft:10,
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