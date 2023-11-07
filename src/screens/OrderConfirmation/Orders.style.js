import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

export default styles = StyleSheet.create({
    container:{
        flex:1,
    },
    orderContainer:{
        marginVertical: 50,
        backgroundColor: colors.grey
    },
    imageBackground: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    listContainer:{
        flex: 1,
    },
    totalText:{
        fontFamily: 'Arimo',
        color: colors.black,
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 20,
        marginBottom:20,
    },
    emptyCartText:{
        fontFamily: 'Arimo',
        color: colors.red,
        fontWeight: 'bold',
        fontSize:20,
        alignSelf: 'center',
        backgroundColor: colors.black,
        padding: 15,
        marginVertical: 200,
        borderRadius: 7,
    },
    ordersScreenText:{
        fontFamily:'Arimo',
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 17,
        padding: 20,
    },
    ordersScreenTextButton:{
        fontFamily:'Arimo',
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 17,
        padding: 20,
        alignSelf: 'center'
    },
    orderConfirmationButton:{
        marginTop: 20,
        backgroundColor: colors.black,
        marginHorizontal: 80,
        borderRadius: 7,
    },
    inputOrder:{
        alignSelf: 'center',
        fontSize:14,
        fontWeight:'bold'
        
    }
});