import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export default styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 50,
        marginBottom: 20,
    },
    imageBackground: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    profileContainer:{
        flex:1,
        backgroundColor: colors.grey,
    },
    locationText:{
        fontFamily: 'Arimo',
        fontWeight: 'bold',
        color: colors.red,
        fontSize: 15,
        margin: 4,
        alignSelf: 'center',
    },
    image: {
        width: 200,
        height: 200,
        borderRadius:5,
        borderColor: colors.grey
    },
    cameraButton: {
        backgroundColor: colors.black,
        height:40,
        width: 175,
        marginTop: 20,
        borderRadius: 5,
    },
    confimButton:{
        backgroundColor: colors.black,
        height:40,
        width: 150,
        marginTop: 20,
        borderRadius: 5,
    },
    buttonLocation:{
        backgroundColor: colors.black,
        height:40,
        width: 150,
        marginTop: 20,
        borderRadius: 5,
    },
    registrationContainer:{
        marginHorizontal:20,
    },
    registerText:{
        fontFamily: 'Arimo',
        fontWeight: 'bold',
        color: colors.red,
        fontSize: 17,
        margin: 4,
        alignSelf: 'center',
    },
    buttonDeleteAccount:{
        backgroundColor: colors.black,
        height:40,
        width: 150,
        marginTop: 20,
        borderRadius: 5,
    }

})