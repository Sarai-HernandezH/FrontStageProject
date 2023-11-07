import { View, Text, Pressable, Image } from 'react-native'
import { useDispatch } from 'react-redux'
import React from 'react'
import styles from './CartItem.style'
import Entypo from '@expo/vector-icons/Entypo'
import { removeItem } from '../../../features/cart/cartSlice'

const CartItem = ({ item }) => {

    const dispatch = useDispatch();
    
    const handleRemoveItem = (itemId) => {
        dispatch(removeItem({ id: itemId }));
    }
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
                <Text style={styles.textCartItem}>{item.title}</Text>
            </View>
            <View style={styles.details}>
                <View>
                    <Text style={styles.textCartItemT}>Quantity: {item.quantity}</Text>
                    <Text style={styles.textCartItemT}>Price: {item.price}</Text>
                </View>
                <Pressable onPress={() => handleRemoveItem(item.id)} >
                    <Entypo name={'trash'} size={24} color={'#E5383B'} />
                </Pressable>
            </View>
        </View>
    )
}

export default CartItem