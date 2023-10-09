import { View, Text, Pressable, Image } from 'react-native'
import styles from './Profile.style'
import * as ImagePicker from 'expo-image-picker'
import { useDispatch, useSelector } from 'react-redux'
import { setCameraImage } from '../../features/auth/authSlice'
import { usePostProfileImageMutation } from '../../services/shopApi'

const Profile = ({navigation}) => {
    const image = useSelector( state => state.auth.imageCamera)
    const{localId} = useSelector(state => state.auth)
    const [triggerSaverProfileImage, result] = usePostProfileImageMutation()
    const dispatch = useDispatch()


    const verifyCameraPermissions = async () => {
        const {granted} = await ImagePicker.requestCameraPermissionsAsync()
        if(!granted){
            return false
        }
        return true
    }

    const pickImage = async () => {
        const isCameraOk = await verifyCameraPermissions()

        if(isCameraOk){
            let result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [9,16],
                base64: true,
                quality: 0.4,
            })
            if(!result.canceled){
                console.log(result.assets)
                dispatch(setCameraImage(`data:image/jpeg;base64,${result.assets[0].base64}`))
            }
        }
    }

    const confirmImage = () => {
        triggerSaverProfileImage({image, localId})
        console.log(result)
    }

    return (
        <View style={styles.container}>
            {image? (    
            <Image 
                source= {{
                    uri: image,
                }}
                style={styles.image}
                resizeMode= "cover"
            />
            ): (
            <Image 
                source={{
                    uri: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2022/09/emoji-persona-mostrador-informacion-2818051.jpg?tf=3840x'
                }}
                style={styles.image}
                resizeMode= "cover"
            />
            )}
            <Pressable style={styles.cameraButton} onPress={pickImage} >
                <Text>Take profile picture</Text>
            </Pressable>
            <Pressable 
            style={styles.cameraButton} onPress={confirmImage} >
                <Text>Confirm</Text>
            </Pressable>
            <Pressable 
            style={{...styles.cameraButton, marginTop:20}}
            onPress={() => navigation.navigate('LocationScreen')} 
            >
                <Text>Check Location</Text>
            </Pressable>
        </View>
    )
}

export default Profile