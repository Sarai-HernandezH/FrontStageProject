import React from "react";
import { Image } from "react-native";
import Logo from '../images/logo.png'

function LogoIcon() {
        return (
        <Image
            source={Logo}
            style={{
                width:100, 
                height:55, 
                marginTop: 40,
                marginLeft:20,
            }}
        />
        )
}
    

export default LogoIcon