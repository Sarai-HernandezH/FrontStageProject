import { View, Text, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import styles from './login.style'
import { useLoginMutation } from '../../services/authApi'
import { useDispatch } from 'react-redux'
import { setUser } from '../../features/auth/authSlice'
import { Header } from '../../components'
import { insertSession } from '../../db'

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [triggerLogin, result] = useLoginMutation()
    const dispatch = useDispatch()

    const onSubmit = () => {
        console.log(email, password)
        triggerLogin({
            email,
            password,
        })
        .unwrap()
        .then(result => {
            dispatch(setUser(result))
        })
        insertSession({
            localId: result.data.localId,
            email: result.data.email,
            token: result.data.idToken
        })
        .then(result => console.log(result))
        .catch(error => console.log(error.message))
    
}

return (
    <View style={styles.container}>
        <Header navigation={navigation} title={'Login'} />
        <View style={styles.loginContainer}>
            <Text style={styles.loginText}>Login to Start</Text>
            <TextInput
                style={styles.inputEmail}
                value={email}
                placeholder="Enter Email Address"
                onChangeText={setEmail}
            />
            <TextInput
                secureTextEntry={true}
                style={styles.inputEmail}
                value={password}
                placeholder="Enter your Password"
                onChangeText={setPassword}
            />
            <Pressable style={styles.loginButton} onPress={onSubmit}>
                <Text style={styles.loginText}>Login</Text>
            </Pressable>
            <Text style={styles.signInText}>Don't have an account?</Text>
            <Pressable style={styles.loginButton} onPress={() => navigation.navigate("SignIn")}>
                <Text style={styles.loginText}>Register</Text>
            </Pressable>
        </View>
    </View>
)
}

export default Login