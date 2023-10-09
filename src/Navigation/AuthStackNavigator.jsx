import React from "react";
import { SignIn, Login } from "../screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const AuthStack = createNativeStackNavigator();

function AuthStackNavigator() {
    return (
            <AuthStack.Navigator initialRouteName = 'SignIn'>
                <AuthStack.Screen name='SignIn' component={SignIn} />
                <AuthStack.Screen name='Login' component={Login} />
            </AuthStack.Navigator>
    )
}

export default AuthStackNavigator