import { StyleSheet } from 'react-native';
import { colors } from '../../../constants/colors';

export default styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: colors.grey,
    },
    titleText:{
        textAlign: 'center',
        fontFamily: 'Poppins',
        fontSize: 30,
        marginBottom: 30,
        marginVertical: 45,
        color: colors.red,
    },
    introText:{
        textAlign: 'center',
        marginHorizontal: 20,
        fontSize: 17,
        fontFamily: 'Arimo'
    },
    homeContainer:{
        paddingHorizontal: 10,
        backgroundColor: colors.grey,

    },
    homeContainerTwo : {
        paddingHorizontal: 10,
        marginTop: 40,
        backgroundColor: colors.grey,
    },
    navigationText:{
        color: colors.red,
        textAlign: 'center',
        fontSize: 19,
        fontFamily: 'Arimo',
    }
});