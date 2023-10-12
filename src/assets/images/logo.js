import React from "react";
import { Image } from "react-native";
import Logo from '../images/logo.png'

function LogoIcon() {
        return (
        <Image
            source={Logo}
            style={{
                width:100, 
                height:60, 
                marginTop: 5,
                marginLeft:-5,
            }}
        />
        )
}
    

export default LogoIcon