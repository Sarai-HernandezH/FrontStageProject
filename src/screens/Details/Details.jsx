import { Image, Text, SafeAreaView, View, Pressable, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import styles from './Details.style'
import { useDispatch } from 'react-redux'
import { addItem } from '../../features/cart/cartSlice'
import { BackButton, Header } from '../../components'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Swiper from 'react-native-swiper'


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
        <View style={styles.container}>
            <View style={styles.detailsContainer}>
            <ImageBackground source={image} style={styles.imageBackground} >
                
                <Header navigation={navigation} title={"Product"} />
                <BackButton />
                <Swiper
                    style={styles.slide}
                    showsButtons={true}
                    loop={false}
                >
                    {product.images.map((uri, index) => (
                        <View key={index} style={styles.slide}>
                            <Image style={styles.image} source={{ uri }} />
                        </View>
                    ))}
                </Swiper>
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
            </View>
        </View>
    )
}

export default Details
