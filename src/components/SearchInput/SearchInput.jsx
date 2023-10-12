import { TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './SearchInput.style'
import Entypo from '@expo/vector-icons/Entypo'

const SearchInput = ({ onSearch }) => {
    const [value, setValue] = useState('')

    useEffect(() => {
        onSearch(value)
    }, [value])

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
                placeholder="Search"
            />
            <Entypo
                name='magnifying-glass'
                size={25}
                color={'black'}
                onPress={search}
            />
            <Entypo
                name='erase'
                size={25}
                color={'black'}
                onPress={clearInput}
            />
        </View>
    )
}

export default SearchInput
