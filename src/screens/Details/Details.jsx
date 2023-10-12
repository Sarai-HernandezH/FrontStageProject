import { Image, Text, SafeAreaView, View, Pressable } from 'react-native'
import React from 'react'
import styles from './Details.style'
import { useDispatch } from 'react-redux'
import { addItem } from '../../features/cart/cartSlice'
import { Header } from '../../components'
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Details = ({ route, navigation }) => {
    const { product } = route.params
    const dispatch = useDispatch()

    const handleAddToCart = () => {
        dispatch(addItem({ ...product, quantity: 1 }))
    }
    return (
        <SafeAreaView style={styles.container}>
            <Header navigation={navigation} title={"Product"} />
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={{ uri: product.images[0] }}
                />
            </View>
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.textDescription}>{product.description}</Text>
            <Text style={styles.price}>{`$ ${product.price}`}</Text>
            <Pressable onPress={handleAddToCart} style={styles.addToCartButton}>
                <Text style={styles.addText}>Add to cart. <MaterialCommunityIcons name="cart-arrow-down" size={24} color="red" /></Text>
            </Pressable>
        </SafeAreaView>
    )
}

export default Details
