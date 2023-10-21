import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Index } from "../screens";

const Stack = createNativeStackNavigator();

function LandingNavigator() {
    return (
            <Stack.Navigator 
                initialRouteName = 'Index'
                screenOptions={() => ({
                    headerShown: false,
                })}>
                <Stack.Screen name='Index' component={Index} />
            </Stack.Navigator>
    )
}

export default LandingNavigator