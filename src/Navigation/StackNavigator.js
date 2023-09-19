import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Home, Products, Details } from "../screens";
import { TouchableOpacity, View, Text, Pressable } from "react-native";
import Entypo from '@expo/vector-icons/Entypo'

const Stack = createNativeStackNavigator();

function StackNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName = 'Home'
                screenOptions={({ navigation}) => ({
                    headerShown: true,
                    header: () => (
                        <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                            <Pressable onPress={() => navigation.navigate('Home')} >
                                <Text style={{marginTop: 45, fontSize: 18,  color:'#E5383B', fontWeight:'bold'}}>Front Stage Store</Text>
                            </Pressable>
                            <TouchableOpacity onPress={() => navigation.goBack()} style={{marginTop:45, flexDirection:'row'}}>
                                <Entypo name="beamed-note" size={25} color={'black'}/>
                                <Text>Go Back</Text>
                            </TouchableOpacity>
                        </View>
                    )
            })}>
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='Products' component={Products} />
                <Stack.Screen name='Details' component={Details} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator