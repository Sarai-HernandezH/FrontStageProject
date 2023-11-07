import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from './Orders.style'
import { Header } from '../../components'
import { Text, View, TextInput, Alert, ImageBackground, Pressable } from 'react-native'
import { clearCart } from '../../features/cart/cartSlice'
import RNPickerSelect from 'react-native-picker-select'
import { useUpdateUserProfileMutation } from '../../services/userProfileApi'
import { FontAwesome5 } from '@expo/vector-icons';

const OrderConfirmation = ({ navigation, route }) => {
    const { user } = route.params || {};
    const total = (route.params && route.params.total) || 0;
    const [paymentMethod, setPaymentMethod] = useState('');
    const [shippingAddress, setShippingAddress] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const dispatch = useDispatch();

    const isCartEmpty = useSelector(state => state.cart.items.length === 0);

    const [updateUserProfile] = useUpdateUserProfileMutation();

    const handleFinishOrder = async () => {
        if (isCartEmpty) {
            Alert.alert('No Order Placed', 'Your cart is empty. Add items to your cart before placing an order.');
        } else if (
            (paymentMethod === 'Select Payment Method' || !shippingAddress) ||
            (paymentMethod === 'Credit Card' && !cardNumber)
        ) {
            Alert.alert('Incomplete Information', 'Please fill in all required fields.');
        } else {
            try {
                const profileUpdateResult = await updateUserProfile({
                    localId: 'user-local-id',
                    profile: {
                        shippingAddress: shippingAddress,
                    },
                });
                if (profileUpdateResult.error) {
                    Alert.alert('Error', 'Failed to save shipping address.');
                } else {
                    dispatch(clearCart());
                    Alert.alert('Order Completed!', 'Thank you for your order.');
                    navigation.navigate('Products');
                }
            } catch (error) {
                console.error(error);
            }
        }
    };

    const image = { uri: "https://media.istockphoto.com/id/1093670728/photo/music-store.jpg?s=612x612&w=0&k=20&c=NxN-B71lEsD6Tsn-xrJuW8RQyf-h80JUkjWdzCCdxE8=" }


    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.imageBackground}>
                <Header navigation={navigation} title="Finish your Order" />
                {isCartEmpty ? (
                    <Text style={styles.emptyCartText}>Your cart is empty. Add items to your cart before placing an order.</Text>
                ) : (
                    <>
                        <View style={styles.orderContainer}>
                            <Text style={styles.totalText}>{user}Your total is: ${total}</Text>
                            <Text style={styles.ordersScreenText}>Choose your payment method:</Text>
                            <RNPickerSelect
                                onValueChange={(value) => setPaymentMethod(value)}
                                items={[
                                    { label: 'Select Payment Method', value: '' },
                                    { label: 'Credit Card', value: 'Credit Card' },
                                    { label: 'Paypal', value: 'Paypal' },
                                    { label: 'Google Pay', value: 'Google Pay' },
                                ]}
                            />
                            {paymentMethod === 'Credit Card' && (
                                <View>
                                    <Text style={styles.ordersScreenText}>Enter your card number:</Text>
                                    <TextInput
                                        style={styles.inputOrder}
                                        placeholder="Card Number"
                                        value={cardNumber}
                                        onChangeText={(text) => setCardNumber(text)}
                                    />
                                </View>
                            )}
                            <Text style={styles.ordersScreenText}>Enter your shipping address:</Text>
                            <TextInput
                                style={styles.inputOrder}
                                placeholder="Shipping Address"
                                value={shippingAddress}
                                onChangeText={(text) => setShippingAddress(text)}
                            />
                        </View>
                        <View style={styles.orderConfirmationButton}>
                            <Pressable
                                onPress={handleFinishOrder}
                            >
                                <Text style={styles.ordersScreenTextButton}>
                                    <FontAwesome5
                                        name="money-check-alt"
                                        size={24}
                                        color="white"
                                    />
                                    Complete Order
                                </Text>
                            </Pressable>
                        </View>
                    </>

                )}
            </ImageBackground>
        </View>
    );
};

export default OrderConfirmation;
