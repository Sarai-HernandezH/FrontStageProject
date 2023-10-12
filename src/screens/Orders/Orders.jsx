import { FlatList, Text, View } from 'react-native'
import styles from './Orders.style'
import React from 'react'
import { Header } from '../../components'
import { useGetOrdersQuery } from '../../services/shopApi'

const Orders = (navigation) => {
    const {data, isLoading} = useGetOrdersQuery()

    return (
        <View style={styles.container}>
            <Header navigation={navigation} title={"Your Order"} />
            {!isLoading && (
            <FlatList 
            data={data} 
            renderItem={({item}) => <Text>{item}</Text>}
                key={item => item}
            />
            )}
        </View>
    )
}

export default Orders