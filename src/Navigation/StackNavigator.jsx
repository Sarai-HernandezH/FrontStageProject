import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, Products, Details } from "../screens";
import { TouchableOpacity, View, Text, Pressable, Image } from "react-native";
import Entypo from '@expo/vector-icons/Entypo'
import LogoIcon from "../assets/images/logo";

const Stack = createNativeStackNavigator();

function StackNavigator() {
    return (
            <Stack.Navigator 
                initialRouteName = 'Home'
                screenOptions={({ navigation}) => ({
                    headerShown: true,
                    header: () => (
                        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                            <Pressable onPress={() => navigation.navigate('Home')} >
                                <LogoIcon />
                            </Pressable>
                            <TouchableOpacity onPress={() => navigation.goBack()} style={{marginTop:45, flexDirection:'row', marginRight: 20}}>
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
    )
}

export default StackNavigator