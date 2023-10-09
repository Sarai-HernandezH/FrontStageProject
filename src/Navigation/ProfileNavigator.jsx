import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Profile, LocationScreen } from "../screens";

const Stack = createNativeStackNavigator();

function ProfileNavigator() {
    return (
            <Stack.Navigator 
                initialRouteName = 'Profile'
                screenOptions={() => ({
                    headerShown: false,
                })}>
                <Stack.Screen name='Profile' component={Profile} />
                <Stack.Screen name='LocationScreen' component={LocationScreen} />
            </Stack.Navigator>
    )
}

export default ProfileNavigator