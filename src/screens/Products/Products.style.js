import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export default styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    productContainer:{
        width: '42%',
        resizeMode: 'cover',
        backgroundColor: colors.red,
        marginBottom: 10,
        marginLeft:14,
        marginRight:14,
        paddingVertical: 10,
        paddingHorizontal: 8,
        borderRadius: 10,
        gap: 15,
    },
    listContainer:{
        flex: 1,
    },  
    imageBackground: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    itemsList:{
        color: colors.white,
        height: 'cover',
        fontSize: 10,
        fontFamily: 'PoppinsSemiBoldItalic', 
        alignSelf: 'center',
        marginTop: 5,
        shadowColor: colors.white,
        borderRadius: 2,
        flexDirection: 'row',
    },
    price:{
        fontFamily: 'Arimo',
        fontSize:15,
    },
    image:{
        width:100,
        height:100,
        alignSelf: 'center',
        borderRadius: 8,
    },
    wrapperStyle:{
        
        justifyContent:'space-between',
    }
})