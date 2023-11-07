import { View, Text, FlatList, Pressable, ImageBackground } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import styles from './Cart.style'
import CartItem from './components/CartItem'
import { useSelector } from 'react-redux'
import { usePostOrderMutation } from '../../services/shopApi'
import { Header, BackButton } from '../../components'


const Cart = () => {
    const cart = useSelector(state => state.cart.items)
    const user = useSelector(state => state.auth);
    const total = useSelector(state => state.cart.total)
    const [triggerPost, result] = usePostOrderMutation()
    const navigation = useNavigation();

    const renderItem = ({ item }) => <CartItem item={item} />

    const confirmCart = () => {
        triggerPost({ total, cart, user })
        navigation.navigate('OrderConfirmationScreen', {total} )
    }
    



const image = { uri: "https://media.istockphoto.com/id/1093670728/photo/music-store.jpg?s=612x612&w=0&k=20&c=NxN-B71lEsD6Tsn-xrJuW8RQyf-h80JUkjWdzCCdxE8=" }

return (
    <View style={styles.container}>
        <ImageBackground source={image} style={styles.imageBackground}>
            <Header navigation={navigation} title={"Cart"} />
            <BackButton />
            <View>
                <FlatList
                    data={cart}
                    keyExtractor={item => item.id}
                    renderItem={renderItem}
                />
            </View>
            <View>
                <View>
                    <Text style={styles.textCart}>{`Total $${total}`}</Text>
                </View>
                <Pressable onPress={confirmCart}>
                    <Text style={styles.textConfirm}>Confirm</Text>
                </Pressable>
            </View>
        </ImageBackground>
    </View>
)
}

export default Cart