import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export default styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    productContainer:{
        width: '45%',
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
    itemsList:{
        color: colors.white,
        fontSize: 10,
        fontFamily: 'PoppinsSemiBoldItalic', 
        alignSelf: 'center',
        marginTop: 15,
        shadowColor: colors.white,
        shadowOffset: {height: 5, width: 3},
        elevation: 10,
        shadowOpacity: 1,
        shadowRadius: 1,
        borderRadius: 2,
        flexDirection: 'row',
    },
    image:{
        width:150,
        height:150,
        alignSelf: 'center'
    },
    wrapperStyle:{
        justifyContent:'space-between',
    }
})