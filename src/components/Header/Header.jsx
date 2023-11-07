import { Text, View, Pressable, Alert } from 'react-native'
import React from 'react'
import LogoIcon from '../../assets/images/logo'
import { AntDesign } from '@expo/vector-icons'
import styles from './Header.styles'
import { SafeAreaView } from 'react-native'
import { useDispatch } from 'react-redux'
import { signOut } from '../../features/auth/authSlice'



const Header = ({ navigation, title }) => {
    const dispatch = useDispatch()


    const logout = () => {

        Alert.alert(
            'Logout Confirmation',
            'Are you sure you want to log out?',
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'Logout',
                    onPress: () => {
                        dispatch(signOut());
                        navigation.navigate('Index')
                    },
                },
            ]
        );
    };


    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Pressable onPress={() => navigation.navigate('Home')} >
                    <LogoIcon />
                </Pressable>
                <Text style={styles.text}>{title}</Text>
                <AntDesign name="logout" size={24} color="black" style={styles.buttonExit} onPress={logout} />
            </View>
        </SafeAreaView>
    )
}

export default Header
