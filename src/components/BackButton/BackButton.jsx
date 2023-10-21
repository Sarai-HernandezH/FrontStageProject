import { View, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

const BackButton = () => {
    const navigation = useNavigation ();
    
    return (
        <View>
            <Pressable onPress={() => navigation.goBack()}>
                <Ionicons name="ios-arrow-back-circle-sharp" size={30} color="white" style={{marginBottom:10, marginTop: -14}} />
            </Pressable>
        </View>
    )
}

export default BackButton