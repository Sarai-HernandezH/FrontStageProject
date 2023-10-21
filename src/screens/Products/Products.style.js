import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export default styles = StyleSheet.create({
    container:{
        flex: 1,
        height: '100%'
    },
    productContainer:{
        width: '45%',
        resizeMode: 'cover',
        backgroundColor: colors.red,
        marginBottom: 20,
        marginLeft:8,
        marginRight:8,
        alignItems: 'flex-start',
        paddingVertical: 10,
        paddingHorizontal: 8,
        borderRadius: 10,
        gap: 10,
    },
    imageBackground: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    itemsList:{
        color: colors.white,
        fontSize: 10,
        fontFamily: 'PoppinsSemiBoldItalic', 
        alignSelf: 'center',
        marginTop: 5,
        shadowColor: colors.white,
        borderRadius: 2,
        flexDirection: 'row',
    },
    image:{
        width:100,
        height:100,
        alignSelf: 'center'
    },
    wrapperStyle:{
        justifyContent:'space-between',
    }
})