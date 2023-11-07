import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Cart, OrderConfirmation } from "../screens";


const Stack = createNativeStackNavigator();

function CartNavigator() {
    return (
            <Stack.Navigator 
                initialRouteName = 'Cart'
                screenOptions={() => ({
                    headerShown: false,
                })}>
                <Stack.Screen name='Cart' component={Cart} />
                <Stack.Screen name= 'OrderConfirmationScreen' component={OrderConfirmation} />
            </Stack.Navigator>
    )
}

export default CartNavigator