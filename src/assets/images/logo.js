import React from "react";
import { Image } from "react-native";
import Logo from '../images/logo.png'

function LogoIcon() {
        return (
        <Image
            source={Logo}
            style={{
                width:100, 
                height:50, 
                marginTop: 14,
                marginLeft:-5,
            }}
        />
        )
}
    

export default LogoIcon