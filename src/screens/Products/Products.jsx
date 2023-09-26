import { FlatList, Text, TouchableOpacity, View, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import allProducts from '../../data/products';
import styles from './Products.style';
import {Header, SearchInput} from '../../components'


const Products = ({ navigation, route }) => {
    const [productList, setProductsList] = useState([])
    const [keyword, setKeyword] = useState('')
    const {category} = route.params

    useEffect(() => {
        if (category) {
            const products = allProducts.filter(
                (product) => product.category === category
            )
            const productsFiltered = products.filter(
                product => product.title.includes(keyword)
            )
            setProductsList(productsFiltered)
        } else {
            const productsFiltered = allProducts.filter(
                product => product.title.includes(keyword)
            )
            setProductsList(productsFiltered)
        }
    }, [category, keyword])

    return (
        <View style={styles.container}>
            <Header title={category} />
            <SearchInput onSearch={setKeyword} />
            <View>
                <FlatList
                    data={productList}
                    numColumns={2}
                    columnWrapperStyle={styles.wrapperStyle}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={styles.productContainer} 
                            onPress={() =>
                                navigation.navigate('Details', {product: item})   
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
                
            </View>
        </View>
    )
}

export default Products

