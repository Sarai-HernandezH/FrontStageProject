import { Pressable, Text } from 'react-native'
import React from 'react'

import { Card } from '../../../../components' 
import styles from './CategoryItem.style'

const CategoryItem = ({ category, navigation }) => {
    return (
        <Pressable
            onPress={() => {
                navigation.navigate('Products', {category})
            }}
            style={styles.container}
        >
            <Card style={styles.cardContainer}>
                <Text style={styles.text}>{category}</Text>
            </Card>
        </Pressable>
    )
}

export default CategoryItem
