import { Text, View } from 'react-native';
import React from 'react';
import styles from './Header.styles';

const Header = ({ title }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}

export default Header