import React from 'react'
import { SafeAreaView, View, Pressable, Text, ImageBackground } from 'react-native'
import styles from './Index.style'
import { Header } from '../../../components'
import { Fontisto } from '@expo/vector-icons';

const image = { uri: "https://media.istockphoto.com/id/1093670728/photo/music-store.jpg?s=612x612&w=0&k=20&c=NxN-B71lEsD6Tsn-xrJuW8RQyf-h80JUkjWdzCCdxE8=" }

const Index = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={image} style={styles.image} >
                <Header navigation={navigation} title={'Home'} />
                <View>
                    <Text style={styles.titleText}> Front Stage Store</Text>
                </View>
                <View style={styles.homeContainer}>
                    <Text style={styles.introText}>
                        Welcome to our music store, the ultimate destination for all music enthusiasts! Step into a world of rhythm,
                        melody, and soul as we proudly present a vast collection of instruments, vinyl records, CDs, and so much more, curated to satisfy even the most discerning audiophiles.
                    </Text>
                </View>
                <View style={styles.homeContainerTwo}>
                    <Text style={styles.introText}>
                        Whether you're a seasoned musician, a collector, or someone simply looking to embrace the power of music, we've got you covered.
                        Our shelves are brimming with a diverse selection of high-quality products, each one crafted with precision and passion.
                    </Text>
                </View>
                <View style={styles.homeContainerTwo}>
                    <Pressable onPress={() => navigation.navigate('Registration')} >
                        <Text style={styles.navigationText}>
                            Click here and Check all of our products available!
                        </Text>
                        <Fontisto name="shopping-store" size={24} color="black" style={{ alignSelf: 'center', marginTop: 5 }} />
                    </Pressable>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default Index