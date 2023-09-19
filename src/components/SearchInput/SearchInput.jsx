import { Pressable, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import styles from './SearchInput.style'
import Entypo from '@expo/vector-icons/Entypo'

const SearchInput = ({ onSearch }) => {
    const [value, setValue] = useState('')

    const search = () => {
        onSearch(value)
    }

    const clearInput = () => {
        setValue('')
        onSearch('')
    }
    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.input}
                value={value} 
                onChangeText={setValue} 
                placeholder="Search product"
            />
            <Pressable onPress={search}>
                <Entypo name='magnifying-glass' size={25} color={'black'} />
            </Pressable>
            <Pressable onPress={clearInput}>
                <Entypo name='erase' size={25} color={'black'} />
            </Pressable>
        </View>
    )
}

export default SearchInput
