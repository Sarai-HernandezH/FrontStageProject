import { 
    FlatList, 
    Text, 
    TouchableOpacity, 
    View,
    SafeAreaView, 
    Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './Products.style';
import { Header, SearchInput } from '../../components'
import { useSelector } from 'react-redux';
import { useGetProductsByCategoryQuery } from '../../services/shopApi';



const Products = ({ navigation }) => {
    const category = useSelector(state => state.shop.categorySelected)
    const [keyword, setKeyword] = useState('')
    const { data, isLoading } = useGetProductsByCategoryQuery(category)


   /* useEffect(() => {
        console.log(data)
        if (data) {
            const productsFiltered = data.filter(
                product => product.title.includes(keyword)
            )
            
        } 
    }, [])*/

    return (
        <SafeAreaView style={styles.container}>
            <Header title={category} />
            <SearchInput onSearch={setKeyword} />
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
        </SafeAreaView>
    )
}

export default Products

