import { Image, Text, SafeAreaView, View, Pressable } from 'react-native'
import React from 'react'
import styles from './Details.style'
import { useDispatch } from 'react-redux'
import { addItem } from '../../features/cart/cartSlice'


const Details = ({ route }) => {
    const { product } = route.params
    const dispatch = useDispatch()

    const handleAddToCart = () => {
        dispatch(addItem({ ...product, quantity: 1 }))
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={{ uri: product.images[0] }}
                />
            </View>
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.textDescription}>{product.description}</Text>
            <Text style={styles.price}>{`$ ${product.price}`}</Text>
            <Pressable onPress={handleAddToCart}>
                <Text>Add to cart.</Text>
            </Pressable>
        </SafeAreaView>
    )
}

export default Details
