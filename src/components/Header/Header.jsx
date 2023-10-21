import { Text, View, Pressable } from 'react-native'
import React from 'react'
import LogoIcon from '../../assets/images/logo'
import { AntDesign } from '@expo/vector-icons'
import styles from './Header.styles'
import { SafeAreaView } from 'react-native'
import { useDispatch } from 'react-redux'
import { clearUser } from '../../features/auth/authSlice'
import { deleteSession } from '../../db'


const Header = ({ navigation, title }) => {
    const dispatch = useDispatch()

    const logout = () => {
        dispatch(clearUser())
        deleteSession()
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Pressable onPress={() => navigation.navigate('Index')} >
                    <LogoIcon />
                </Pressable>
                <Text style={styles.text}>{title}</Text>
                <AntDesign name="logout" size={24} color="black" style={styles.buttonExit} onPress={logout} />
            </View>
        </SafeAreaView>
    )
}

export default Header
