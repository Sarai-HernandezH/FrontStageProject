import { Pressable, SafeAreaView, Text, TextInput, View, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { Header } from '../../components'
import { insertSession } from '../../db'
import { setUser } from '../../features/auth/authSlice'
import styles from './login.style'
import { useDispatch } from 'react-redux'
import { useLoginMutation } from '../../services/authApi'

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [triggerLogin] = useLoginMutation()
    const dispatch = useDispatch()

    const onSubmit = () => {
        triggerLogin({
            username,
            email,
            password,
        })
            .unwrap()
            .then(result => {
                dispatch(setUser(result))
                insertSession({
                    localId: result.localId,
                    email: result.email,
                    token: result.idToken,
                })
                    .then(result => console.log(result))
                    .catch(error => console.log(error.message))
                navigation.navigate('Bottom')
            })
    }
    const image = { uri: "https://media.istockphoto.com/id/1093670728/photo/music-store.jpg?s=612x612&w=0&k=20&c=NxN-B71lEsD6Tsn-xrJuW8RQyf-h80JUkjWdzCCdxE8=" }
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={image} style={styles.image} >
                <Header navigation={navigation} title={'Login'} />
                <View style={styles.loginContainer}>
                    <Text style={styles.loginText1}>Login to start</Text>
                    <TextInput
                        style={styles.inputEmail}
                        value={username}
                        onChangeText={setUsername}
                        placeholder="Enter your Username"
                    />
                    <TextInput
                        style={styles.inputEmail}
                        value={email}
                        onChangeText={setEmail}
                        placeholder="Enter your Email"
                    />
                    <TextInput
                        secureTextEntry={true}
                        style={styles.inputEmail}
                        value={password}
                        onChangeText={setPassword}
                        placeholder="Enter your Password"
                    />
                    <Pressable style={styles.loginButton} onPress={onSubmit}>
                        <Text style={styles.loginText} >Login</Text>
                    </Pressable>
                    <Text style={styles.loginText}>You don't have an account?</Text>
                    <Pressable
                        style={styles.loginButton}
                        onPress={() => navigation.navigate('SignIn')}
                    >
                        <Text style={styles.loginText}>Sign up</Text>
                    </Pressable>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default Login
