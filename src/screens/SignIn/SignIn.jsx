import { View, Text, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import styles from './signIn.style'
import { useSignUpMutation } from '../../services/authApi'
import { useDispatch } from 'react-redux'
import { setUser } from '../../features/auth/authSlice'

const SignIn = ({navigation}) => {
    const [ email, setEmail] = useState ('')
    const [password, setPassword] = useState ('')
    const [confirmPass, setConfirmPass] = useState ('')
    const [ triggerSignIn, result] = useSignUpMutation()
    const dispatch = useDispatch()

    const onSubmit = () => {
        console.log(email, password, confirmPass)
        triggerSignIn({
            email,
            password,
        })
        console.log(result)
        if (result.isSuccess){
            dispatch(setUser(result))
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.loginContainer}>
                <Text>Sign in to Start</Text>
                <TextInput 
                    style={styles.inputEmail} 
                    value={email} 
                    onChangeText={setEmail} 
                    placeholder="Enter Email Address"
                />
                <TextInput 
                    style={styles.inputEmail}  
                    value={password} 
                    onChangeText={setPassword}
                    placeholder="Enter Password" 
                />
                <TextInput 
                    style={styles.inputEmail} 
                    value={confirmPass} 
                    onChangeText={setConfirmPass} 
                    placeholder="Confirm Password"
                />
                <Pressable style={styles.loginButton} onPress={onSubmit}>
                    <Text style={styles.loginText}>Sign in</Text>
                </Pressable>
                <Text>Already have an account?</Text>
                <Pressable style={styles.loginButton} onPress={() => navigation.navigate("Login")}>
                    <Text style={styles.loginText}>Login</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default SignIn