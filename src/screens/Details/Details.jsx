import { Image, Text, SafeAreaView, View } from 'react-native'
import { useSelector } from 'react-redux'
import React from 'react'
import styles from './Details.style'


const Details = ({ route }) => {
    const counter = useSelector( state => state.counter.value)
    const { product } = route.params
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
            <Text style={{fontSize: 30}}>{counter}</Text>
        </SafeAreaView>
    )
}

export default Details
