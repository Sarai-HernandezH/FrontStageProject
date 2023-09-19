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
                    renderItem={({ item }) => (
                        <TouchableOpacity 
                            onPress={() =>
                                navigation.navigate('Details', {product: item})   
                            }>
                            <Text style={styles.itemsList}>{item.title} <Image style={styles.image} source={{ uri: item.thumbnail }} /></Text>
                        </TouchableOpacity>)}
                    keyExtractor={item => item.id}
                />
                
            </View>
        </View>
    )
}

export default Products

