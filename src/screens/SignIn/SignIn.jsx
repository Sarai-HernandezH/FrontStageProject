import { View, Text, TextInput, Pressable, SafeAreaView, ImageBackground, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from './signIn.style'
import { useSignUpMutation } from '../../services/authApi'
import { useDispatch } from 'react-redux'
import { setUser } from '../../features/auth/authSlice'
import { Header } from '../../components'


const SignIn = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const [triggerSignup] = useSignUpMutation()
    const dispatch = useDispatch()

    const onSubmit = () => {
        triggerSignup({
            username,
            email,
            password,
        })
            .unwrap()
            .then(result => {
                dispatch(setUser(result))
                console.log(result)
            })
            .catch(err => console.log(err))
            Alert.alert('Welcome!');
            navigation.navigate('Bottom', {username})
    }

    const image = { uri: "https://media.istockphoto.com/id/1093670728/photo/music-store.jpg?s=612x612&w=0&k=20&c=NxN-B71lEsD6Tsn-xrJuW8RQyf-h80JUkjWdzCCdxE8=" }

    return (
        <SafeAreaView style={styles.container} >
            <ImageBackground source={image} style={styles.image} >
                <Header navigation={navigation} title={'Sign Up'} />
                <View style={styles.loginContainer}>
                    <Text style={styles.loginText}>To pay or Safe your cart you need to create an account.</Text>
                    <Text style={styles.loginText1}>Sign in to Start</Text>
                    <TextInput
                        style={styles.inputEmail}
                        value={username}
                        onChangeText={setUsername}
                        placeholder="Enter Username"
                    />
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
                    <Text style={styles.loginText}>Already have an account?</Text>
                    <Pressable
                        style={styles.loginButton}
                        onPress={() => navigation.navigate('Login')}
                    >
                        <Text style={styles.loginText}>Login</Text>
                    </Pressable>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default SignIn