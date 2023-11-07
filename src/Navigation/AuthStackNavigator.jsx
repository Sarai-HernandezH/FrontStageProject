import React from "react";
import { Index, SignIn, Login } from "../screens"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import BottomTabNavigator from "./BottomTabNavigator";



const AuthStack = createNativeStackNavigator();

function AuthStackNavigator() {



    return (
        <AuthStack.Navigator
            initialRouteName='Index'
            screenOptions={() => ({
                headerShown: false,
            })}
        >
            <AuthStack.Screen name='Index' component={Index} />
            <AuthStack.Screen name='SignIn' component={SignIn} />
            <AuthStack.Screen name='Login' component={Login} />
            <AuthStack.Screen name='Bottom' component={BottomTabNavigator} />
        </AuthStack.Navigator>
    )
}

export default AuthStackNavigator