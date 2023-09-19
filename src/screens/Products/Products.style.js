import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export default styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
    },
    itemsList:{
        color: colors.primary,
        fontSize: 18,
        fontFamily: 'PoppinsSemiBoldItalic', 
        paddingHorizontal: 15,
        paddingVertical: 18,
        marginHorizontal: 18,
        flex: 1,
        marginTop: 15,
        backgroundColor: colors.secondary,
        shadowColor: '#000',
        shadowOffset: {height: 5, width: 3},
        elevation: 10,
        shadowOpacity: 1,
        shadowRadius: 1,
        borderRadius: 5,
        flexDirection: 'row',
    },
    image:{
        width:60,
        height:60,
    }
})