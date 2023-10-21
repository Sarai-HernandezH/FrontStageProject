import { View, Text, TextInput, Pressable, SafeAreaView, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import styles from './signIn.style'
import { useSignUpMutation } from '../../services/authApi'
import { navigateToBottomTabNavigator } from '../../Navigation/CustomNavigation'
import { useDispatch } from 'react-redux'
import { setUser } from '../../features/auth/authSlice'
import { Header } from '../../components'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const SignIn = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const [triggerSignIn, result] = useSignUpMutation()
    const dispatch = useDispatch()


    const onSubmit = () => {
        console.log('Login button')
        triggerSignIn({
            email,
            password,
        })
            .unwrap()
            .then(result => {
                console.log(result)
                dispatch(setUser(result))
            })
            .catch(err => console.log(err))

    }
    const handleContinueAsGuest = () => {
        navigation.dispatch(navigateToBottomTabNavigator());
    };

    const image = { uri: "https://media.istockphoto.com/id/1093670728/photo/music-store.jpg?s=612x612&w=0&k=20&c=NxN-B71lEsD6Tsn-xrJuW8RQyf-h80JUkjWdzCCdxE8=" }

    return (
        <SafeAreaView style={styles.container} >
            <ImageBackground source={image} style={styles.image} >
                <Header navigation={navigation} title={'Sign Up'} />
                <View style={styles.loginContainer}>
                    <Text style={styles.loginWhite}>Sign in to Start</Text>
                    <TextInput
                        style={styles.inputEmail}
                        value={email}
                        onChangeText={setEmail}
                        placeholder="Enter Email Address"
                    />
                    <TextInput
                        secureTextEntry={true}
                        style={styles.inputEmail}
                        value={password}
                        onChangeText={setPassword}
                        placeholder="Enter Password"
                    />
                    <TextInput
                        secureTextEntry={true}
                        style={styles.inputEmail}
                        value={confirmPass}
                        onChangeText={setConfirmPass}
                        placeholder="Confirm Password"
                    />
                    <Pressable style={styles.loginButton} onPress={onSubmit}>
                        <Text style={styles.loginText}>Sign in</Text>
                    </Pressable>
                    <Text style={styles.signInText}>Already have an account?</Text>
                    <Pressable style={styles.loginButton} onPress={() => navigation.navigate("Login")}>
                        <Text style={styles.loginText}>Login</Text>
                    </Pressable>
                    <View style={styles.guestContainer}>
                        <Text style={styles.loginWhite}> Would you like to continue as a guest?</Text>
                        <Pressable style={styles.guestButton} onPress={handleContinueAsGuest}>
                            <Text style={styles.loginText}>Click here</Text>
                            <MaterialCommunityIcons name="forward" size={24} color="black" />
                        </Pressable>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default SignIn