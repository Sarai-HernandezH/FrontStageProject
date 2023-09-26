import {StyleSheet} from 'react-native'
import { colors } from '../../../src/constants/colors';

export default styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.grey,
    },
    title:{
        fontSize: 20,
        fontFamily: 'PoppinsSemiBoldItalic',
        textAlign: 'center'
    },
    textDescription:{
        fontFamily: 'PoppinsSemiBoldItalic',
        fontSize: 15,
        marginHorizontal: 10,
        
    },
    imageContainer: {
        justifyContent: 'center',
        height: '50%',
        width: '100%',
        alignSelf: 'center',
    },
    image:{
        height:'100%'
    },
    price:{
        fontSize:20,
        fontWeight: 'bold',
        marginVertical: 15,
        marginLeft:10,
    }
})