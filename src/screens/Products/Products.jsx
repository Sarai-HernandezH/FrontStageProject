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
import { BackButton, Header } from '../../components'
import { useSelector, useDispatch } from 'react-redux';
import { useGetProductsByCategoryQuery } from '../../services/shopApi';
import { setUser } from '../../features/auth/authSlice'


const Products = ({ navigation }) => {
    const category = useSelector(state => state.shop.categorySelected)
    const [keyword] = useState('')
    const [products, setProducts] = useState([])
    const { data, isLoading } = useGetProductsByCategoryQuery(category)
    const { user, localId } = useSelector(state => state.auth)
    const dispatch = useDispatch()

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

    useEffect(() => {
        ; (async () => {
            try {
                const session = await fetchSession()
                if (session.rows.length) {
                    const user = session.rows._array[0]
                    console.log(session.rows._array[0])
                    dispatch(setUser(user))
                    console.log(user)
                }
            } catch (error) {
            }
        })()
    }, [])

    const image = { uri: "https://media.istockphoto.com/id/1093670728/photo/music-store.jpg?s=612x612&w=0&k=20&c=NxN-B71lEsD6Tsn-xrJuW8RQyf-h80JUkjWdzCCdxE8=" }

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={image} style={styles.imageBackground} >
                <Header navigation={navigation} title={category} />
                <BackButton />
                <View style={styles.listContainer}>
                    {!isLoading && (
                        <FlatList
                            data={products}
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

