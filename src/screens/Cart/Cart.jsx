import { View, Text, FlatList, Pressable } from 'react-native'
import React from 'react'
import styles from './Cart.style'
import CartItem from './components/CartItem'
import { useSelector } from 'react-redux'
import { usePostOrderMutation } from '../../services/shopApi'
import { Header } from '../../components'

const Cart = ({navigation}) => {
    const cart = useSelector(state => state.cart.items)
    const total = useSelector(state => state.cart)
    const [triggerPost, result] = usePostOrderMutation()

    const renderItem = ({ item }) => <CartItem item={item} />

    const confirmCart = () => {
        triggerPost({ total, cart, user: "LoggedUser" })
    }


    return (
        <View style={styles.container}>
            <Header navigation={navigation} title={"Your Total"} />
            <View>
                <FlatList
                    data={cart}
                    keyExtractor={item => item.id}
                    renderItem={renderItem}
                />
            </View>
            <View>
                <Pressable onPress={confirmCart}>
                    <View>
                        <Text>{`Total $${total}`}</Text>
                    </View>
                    <Text>Confirm</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Cart