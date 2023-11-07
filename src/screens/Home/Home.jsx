import { FlatList, SafeAreaView, View, ImageBackground } from 'react-native'
import { BackButton, Header } from '../../components'
import { CategoryItem } from './components'
import React from 'react'
import { useGetCategoriesQuery } from '../../services/shopApi'
import styles from './Home.style'

const image = { uri: "https://media.istockphoto.com/id/1093670728/photo/music-store.jpg?s=612x612&w=0&k=20&c=NxN-B71lEsD6Tsn-xrJuW8RQyf-h80JUkjWdzCCdxE8=" }

const Home = ({ navigation }) => {
    const { data, isLoading } = useGetCategoriesQuery()
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={image} style={styles.imageBackground} >
                <Header navigation={navigation} title={'Our Products'} />
                <BackButton />
                <View style={styles.listContainer}>
                    {!isLoading && (
                        <FlatList
                            data={data}
                            keyExtractor={category => category.title}
                            renderItem={({ item }) => (
                                <CategoryItem
                                    category={item.title}
                                    navigation={navigation}
                                />
                            )}
                        />
                    )}
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default Home
