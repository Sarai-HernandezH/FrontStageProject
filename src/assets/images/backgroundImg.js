import React from "react";
import { Image } from "react-native";
import Background from './backgroundStore.jpg'


function BackgroundImage() {
        return (
        <Image
            source={Background}
            style={{
                flex: 1,
                width:'100%', 
            }}
        />
        )
}
    

export default BackgroundImage