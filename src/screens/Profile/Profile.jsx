import { View, Text, Pressable, Image } from 'react-native'
import styles from './Profile.style'
import * as ImagePicker from 'expo-image-picker'
import { useDispatch, useSelector } from 'react-redux'
import { setCameraImage } from '../../features/auth/authSlice'
import { usePostProfileImageMutation } from '../../services/shopApi'
import { Header } from '../../components'
import { Entypo } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'

const Profile = ({ navigation }) => {
    const image = useSelector(state => state.auth.imageCamera)
    const { localId } = useSelector(state => state.auth)
    const [triggerSaverProfileImage, result] = usePostProfileImageMutation()
    const dispatch = useDispatch()


    const verifyCameraPermissions = async () => {
        const { granted } = await ImagePicker.requestCameraPermissionsAsync()
        if (!granted) {
            return false
        }
        return true
    }

    const pickImage = async () => {
        const isCameraOk = await verifyCameraPermissions()

        if (isCameraOk) {
            let result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [9, 16],
                base64: true,
                quality: 0.4,
            })
            if (!result.canceled) {
                console.log(result.assets)
                dispatch(setCameraImage(`data:image/jpeg;base64,${result.assets[0].base64}`))
            }
        }
    }

    const confirmImage = () => {
        triggerSaverProfileImage({ image, localId })
        console.log(result)
    }

    return (
        <View style={styles.profileContainer}>
            <Header navigation={navigation} title={"Profile"} />
            <View style={styles.container}>
                {image ? (
                    <Image
                        source={{
                            uri: image,
                        }}
                        style={styles.image}
                        resizeMode="cover"
                    />
                ) : (
                    <Image
                        source={{
                            uri: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2022/09/emoji-persona-mostrador-informacion-2818051.jpg?tf=3840x'
                        }}
                        style={styles.image}
                        resizeMode="cover"
                    />
                )}
                <View>
                    <Pressable style={styles.cameraButton} onPress={pickImage} >
                        <Text style={styles.locationText}>Take profile picture <Entypo name="camera" size={24} color="red" /></Text>
                    </Pressable>
                </View>
                <View>
                    <Pressable
                        style={styles.confimButton} onPress={confirmImage} >
                        <Text style={styles.locationText}>Confirm <Entypo name="check" size={24} color="red" /></Text>
                    </Pressable>
                </View>
                <View>
                    <Pressable
                        style={styles.buttonLocation}
                        onPress={() => navigation.navigate('LocationScreen')}
                    >
                        <Text style={styles.locationText}>Check Location <Entypo name="location" size={24} color="red" /></Text>
                    </Pressable>
                </View>
            </View>
            <View style={styles.registrationContainer}>
                <Text style={styles.locationText}>If you don't have an account click below to create one.</Text>
            </View>
            <View>
                <Pressable
                    style={styles.buttonRegister}
                    onPress={() => navigation.navigate('SignIn')}
                >
                    <Text style={styles.registerText}>Register<AntDesign name="form" size={24} color="black" /></Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Profile