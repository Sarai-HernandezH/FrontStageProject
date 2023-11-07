import { Image, Text, SafeAreaView, View, Pressable, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import styles from './Details.style'
import { useDispatch } from 'react-redux'
import { addItem } from '../../features/cart/cartSlice'
import { BackButton, Header } from '../../components'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const image = { uri: "https://media.istockphoto.com/id/1093670728/photo/music-store.jpg?s=612x612&w=0&k=20&c=NxN-B71lEsD6Tsn-xrJuW8RQyf-h80JUkjWdzCCdxE8=" }

const Details = ({ route, navigation }) => {
    const { product } = route.params
    const dispatch = useDispatch()

    const [showMessage, setShowMessage] = useState(false)

    const handleAddToCart = () => {
        dispatch(addItem({ ...product, quantity: 1 }))
        setShowMessage(true)

        setTimeout(() => {
            setShowMessage(false);
        }, 1500);
    }
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={image} style={styles.imageBackground} >
                <Header navigation={navigation} title={"Product"} />
                <BackButton />
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={{ uri: product.images[1] }}
                    />
                </View>
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.textDescription}>{product.description}</Text>
                <Text style={styles.price}>{`$ ${product.price}`}</Text>
                <Pressable onPress={handleAddToCart} style={styles.addToCartButton}>
                    <Text style={styles.addText}>Add to cart. <MaterialCommunityIcons name="cart-arrow-down" size={24} color="red" /></Text>
                </Pressable>
                {showMessage && (
                    <View style={styles.messageContainer}>
                        <Text style={styles.messageText}>The product has been added to the cart.</Text>
                    </View>
                )}
            </ImageBackground>
        </SafeAreaView>
    )
}

export default Details
