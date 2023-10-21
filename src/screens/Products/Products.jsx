import {
    FlatList,
    Text,
    TouchableOpacity,
    View,
    SafeAreaView,
    Image,
    ImageBackground
} from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './Products.style';
import { BackButton, Header} from '../../components'
import { useSelector } from 'react-redux';
import { useGetProductsByCategoryQuery } from '../../services/shopApi';



const Products = ({ navigation }) => {
    const category = useSelector(state => state.shop.categorySelected)
    const [keyword, setKeyword] = useState('')
    const [products, setProducts] = useState([])
    const { data, isLoading } = useGetProductsByCategoryQuery(category)

    useEffect(() => {
        console.log(data, isLoading)
        if (!isLoading) {
            const dataArr = Object.values(data)
            setProducts(dataArr)
            const productsFiltered = dataArr.filter(product =>
                product.title.includes(keyword)
            )
            setProducts(productsFiltered)
        }
    }, [isLoading, keyword])

    const image = { uri: "https://media.istockphoto.com/id/1093670728/photo/music-store.jpg?s=612x612&w=0&k=20&c=NxN-B71lEsD6Tsn-xrJuW8RQyf-h80JUkjWdzCCdxE8=" }

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={image} style={styles.imageBackground} >
                <Header navigation={navigation} title={category} />
                <BackButton />
                <View>
                    {!isLoading && (
                        <FlatList
                            data={Object.values(data)}
                            numColumns={2}
                            columnWrapperStyle={styles.wrapperStyle}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    style={styles.productContainer}
                                    onPress={() =>
                                        navigation.navigate('Details', { product: item })
                                    }
                                >
                                    <Image
                                        style={styles.image}
                                        source={{ uri: item.thumbnail }} />
                                    <Text style={styles.itemsList}>{item.title} </Text>
                                    <Text style={styles.price}>{`$${item.price.toFixed(2)}`}</Text>
                                </TouchableOpacity>)}
                            keyExtractor={item => item.id}
                        />
                    )}
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default Products

