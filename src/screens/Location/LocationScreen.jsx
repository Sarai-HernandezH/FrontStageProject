import { View, Text, ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './LocationScreen.style'
import * as Location from 'expo-location'
import { BackButton, Header, MapPreview } from '../../components'

const LocationScreen = ({navigation}) => {
    const [location, setLocation] = useState({ latitude: '', longitude: '' })
    const [error, setError] = useState('')

    useEffect(() => {
        ; (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync()
            if (status !== 'granted') {
                setError('Permission to access location was denied')
                return
            }
            console.log('Este es mi status', status)
            let location = await Location.getCurrentPositionAsync({})
            setLocation({
                latitude: location?.coords.latitude,
                longitude: location?.coords.longitude,
            })
        })()
    }, [])

    const imageB = { uri: "https://media.istockphoto.com/id/1093670728/photo/music-store.jpg?s=612x612&w=0&k=20&c=NxN-B71lEsD6Tsn-xrJuW8RQyf-h80JUkjWdzCCdxE8=" }

    return (
        <View style={styles.container}>
            <ImageBackground source={imageB} style={styles.imageBackground} >
            <Header navigation={navigation} title={"Location"} />
            <BackButton />
            <Text style={styles.locationText}>My Location</Text>
            {location ? (
                <View>
                    <Text style={styles.withoutLocationText}>Lat: {location.latitude}, Longitude: {location.longitude}</Text>
                    <MapPreview location={{location}}/>
                </View>
            ) : (<View>
                <Text>{error}</Text>
            </View>
            )}
            </ImageBackground>
        </View>
    )
}

export default LocationScreen