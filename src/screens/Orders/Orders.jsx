import { FlatList, ImageBackground, Text, View } from 'react-native'
import styles from './Orders.style'
import React from 'react'
import { BackButton, Header } from '../../components'
import { useGetOrdersQuery } from '../../services/shopApi'

const Orders = (navigation) => {
    const { data, isLoading } = useGetOrdersQuery()

    const image = { uri: "https://media.istockphoto.com/id/1093670728/photo/music-store.jpg?s=612x612&w=0&k=20&c=NxN-B71lEsD6Tsn-xrJuW8RQyf-h80JUkjWdzCCdxE8=" }

    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.imageBackground}>
                <Header navigation={navigation} title={"Your Order"} />
                <BackButton />
                {!isLoading && data && data.length > 0 ? (
                    <FlatList
                        data={data}
                        keyExtractor={( index) => index.toString()} // Use a unique key for each item
                        renderItem={({ item }) => (
                            <View style={styles.orderItem}>
                                <Text>Order ID: {item.id}</Text>
                                {/* Add more order details as needed */}
                            </View>
                        )}
                    />
                ) : (
                    <Text>No orders available.</Text>
                )}
            </ImageBackground>
        </View>
    )
}

export default Orders