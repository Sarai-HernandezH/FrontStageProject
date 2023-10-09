import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import styles from './CartItem.style'
import Entypo from '@expo/vector-icons/Entypo'


const CartItem = ({item}) => {
    return (
        <View style={styles.container}>
            <View>
                <Image
                    style={styles.image}
                    source={{
                        uri: item.images[0],
                    }}
                />
            </View>
            <View>
                <Text style={styles.name}>{item.title}</Text>
            </View>
            <View style={styles.details}>
                <View>
                    <Text>{item.quantity}</Text>
                    <Text>{item.price}</Text>
                </View>
                <Pressable>
                    <Entypo name={'trash'} size={24} color={'#E5383B'}/>
                </Pressable>
            </View>
        </View>
    )
}

export default CartItem