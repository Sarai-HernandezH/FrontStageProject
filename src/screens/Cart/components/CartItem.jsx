import { View, Text, Pressable } from 'react-native'
import React from 'react'
import styles from './CartItem.style'
import Entypo from '@expo/vector-icons/Entypo'


const CartItem = () => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.name}>Name</Text>
            </View>
            <View style={styles.details}>
                <View>
                    <Text>Quantity</Text>
                    <Text>Price</Text>
                </View>
                <Pressable>
                    <Entypo
                        name={'trash'}
                        size={24}
                        color={'#E5383B'}
                    />
                </Pressable>
            </View>
        </View>
    )
}

export default CartItem