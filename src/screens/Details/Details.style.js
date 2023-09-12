import {StyleSheet} from 'react-native'
import { colors } from '../../../src/constants/colors';

export default styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.quaternary,
    },
    title:{
        fontSize: 25,
        fontFamily: 'PoppinsSemiBoldItalic',
        textAlign: 'center'
    },
    textDescription:{
        fontFamily: 'PoppinsSemiBoldItalic',
        fontSize: 15,
        marginHorizontal: 10,
    },
    image: {
        justifyContent: 'center',
        height: '45%',
        width: '65%',
        marginHorizontal: 80,
        marginTop: 30,
        marginBottom: 30,
        borderRadius: 7,
    },
    price:{
        fontSize:20,
        fontWeight: 'bold',
        marginVertical: 15,
        marginLeft:10,
    }
})