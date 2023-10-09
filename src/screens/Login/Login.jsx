import { View, Text, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import styles from './login.style'
import { useLoginMutation } from '../../services/authApi'
import { useDispatch } from 'react-redux'
import { setUser } from '../../features/auth/authSlice'

const Login = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState ('')
    const [triggerLogin, result] = useLoginMutation()
    const dispatch = useDispatch()

    const onSubmit = () => {
        console.log(email, password)
        triggerLogin({
            email,
            password,
        })
        console.log(result)
        if(result.isSuccess){
            dispatch(setUser(result))
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.loginContainer}>
                <Text>Login to Start</Text>
                <TextInput 
                    style={styles.inputEmail} 
                    value={email}
                    placeholder="Enter Email Address" 
                    onChangeText={setEmail} 
                />
                <TextInput 
                    style={styles.inputEmail} 
                    value={password} 
                    placeholder="Enter your Password" 
                    onChangeText={setPassword} 
                />
                <Pressable style={styles.loginButton} onPress={onSubmit}>
                    <Text style={styles.loginText}>Login</Text>
                </Pressable>
                <Text>Don't have an account?</Text>
                <Pressable style={styles.loginButton} onPress={() => navigation.navigate("SignIn")}>
                    <Text style={styles.loginText}>Register</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Login