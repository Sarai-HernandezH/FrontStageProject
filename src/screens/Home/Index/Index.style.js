import { StyleSheet } from 'react-native';
import { colors } from '../../../constants/colors';

export default styles = StyleSheet.create({
    container:{
        flex:1,
    },
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    titleText:{
        textAlign: 'center',
        fontFamily: 'PoppinsBold',
        fontSize: 30,
        marginBottom: 25,
        marginVertical: 20,
        color: colors.red,
        position: 'relative',
        backgroundColor: colors.black,
        marginHorizontal: 70,
        borderRadius: 8,
    },
    introText:{
        textAlign: 'center',
        marginHorizontal: 20,
        fontSize: 17,
        fontFamily: 'Arimo',
        borderRadius: 8,
        fontWeight: '900',
    },
    homeContainer:{
        marginLeft: 50,
        marginRight: 50,        
        backgroundColor: colors.grey,
        borderRadius: 8,
    },
    homeContainerTwo : {
        marginTop: 20,
        marginLeft: 50,
        marginRight: 50,        
        backgroundColor: colors.grey,
        borderRadius: 8,
},
    navigationText:{
        color: colors.white,
        textAlign: 'center',
        fontSize: 19,
        fontFamily: 'Arimo',
        fontWeight: 'bold'
    }
});