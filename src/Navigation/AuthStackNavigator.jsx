import React from "react";
import { SignIn, Login, Index } from "../screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const AuthStack = createNativeStackNavigator();

function AuthStackNavigator() {
    return (
            <AuthStack.Navigator 
                initialRouteName = 'SignIn'
                screenOptions={() => ({
                    headerShown: false,
                })}
            >
                <AuthStack.Screen name='SignIn' component={SignIn} />
                <AuthStack.Screen name='Login' component={Login} />
                <AuthStack.Screen name='Index' component={Index} />
            </AuthStack.Navigator>
    )
}

export default AuthStackNavigator