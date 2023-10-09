import { FlatList, SafeAreaView, View, StatusBar } from 'react-native'
import { Header } from '../../components'
import { CategoryItem } from './components'
import React from 'react'
import { useGetCategoriesQuery } from '../../services/shopApi'
import styles from './Home.style'

const Home = ({ navigation }) => {
    const { data, isLoading } = useGetCategoriesQuery()
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar animated={true} barStyle={'dark-content'} />
            <Header title={'Categories'} />
            <View style={styles.listContainer}>
                {!isLoading && (
                <FlatList                
                    data={data}
                    keyExtractor={category => category.title}
                    renderItem={({ item }) => (
                        <CategoryItem
                            category={item.title}
                            navigation={navigation}
                        />
                    )}
                />
                )}
            </View>
        </SafeAreaView>
    )
}

export default Home
