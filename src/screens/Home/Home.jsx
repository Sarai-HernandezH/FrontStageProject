import { FlatList, SafeAreaView, View } from 'react-native'
import { Header } from '../../components'
import { CategoryItem } from './components'
import React from 'react'
import dataCategories from '../../data/dataCategories'
import styles from './Home.style'
import Counter from '../../components/Counter'

const Home = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            < Counter />
            <Header title={'Categories'} />
            <View style={styles.listContainer}>
                <FlatList                
                    data={dataCategories}
                    keyExtractor={category => category}
                    renderItem={({ item }) => (
                        <CategoryItem
                            category={item}
                            navigation={navigation}
                        />
                    )}
                />
            </View>
        </SafeAreaView>
    )
}

export default Home
