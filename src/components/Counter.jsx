import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { increment, decrement, incrementByAmount } from '../features/counter/counterSlice';
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { colors } from '../constants/colors';


const Counter = () => {
    const [inputToAdd, setInputToAdd] = useState(0)
    const counter = useSelector(state => state.counter.value)
    const dispath = useDispatch()

    return (

        <View style={styles.container}>
            <View style={styles.counterContainer}>
                <Pressable
                    style={styles.counterButtons}
                    onPress={() => dispath(decrement())}
                >
                    <Text style={styles.signs}>-</Text>
                </Pressable>
                <Text style={styles.signs}>{counter}</Text>
                <Pressable
                    style={styles.counterButtons}
                    onPress={() => dispath(increment())}
                >
                    <Text style={styles.signs}>+</Text>
                </Pressable>
            </View>
            <View style={styles.inputContaienr}>
                <TextInput
                    keyboardType="number-pad"
                    style={styles.input}
                    placeholder="cantidad a sumar"
                    value={inputToAdd}
                    onChangeText={value => setInputToAdd(Number(value))}
                />
                <Pressable onPress={() => dispath(incrementByAmount(inputToAdd))}>
                    <Text style={{marginLeft:10}}>add</Text>
                </Pressable>
            </View>
        </View>

    )

}



export default Counter



const styles = StyleSheet.create({

    container: {
        backgroundColor: colors.red,
    },
    counterContainer: {
        flexDirection: 'row',
        backgroundColor: colors.grey,
        justifyContent: 'space-between',
        height: 30,
    },
    counterButtons: {
        backgroundColor: colors.black,
        width: '33%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    signs: {
        fontSize: 25,
        color: colors.white
    },
    input: {
        backgroundColor: colors.white,
        width: '60%',
        height: 30,
    },
    inputContaienr: {
        flexDirection: 'row',
        marginVertical: 10,
        padding: 10,
    },

})