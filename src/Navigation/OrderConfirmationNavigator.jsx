import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {OrderConfirmation} from "../screens";

const Stack = createNativeStackNavigator();

function OrdersNavigator() {
    return (
            <Stack.Navigator 
                initialRouteName = 'OrderConfirmation'
                screenOptions={() => ({
                    headerShown: false,
                })}>
                <Stack.Screen name='OrderConfirmation' component={OrderConfirmation} />
            </Stack.Navigator>
    )
}

export default OrdersNavigator