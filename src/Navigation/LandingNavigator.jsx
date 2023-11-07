import AuthStackNavigator from "./AuthStackNavigator"
import BottomTabNavigator from "./BottomTabNavigator"
import { useSelector, useDispatch } from "react-redux"
import { fetchSession } from '../db'
import { useGetProfileImageQuery } from '../services/shopApi'
import { setCameraImage, setUser } from '../features/auth/authSlice'
import { useEffect } from "react"



function LandingNavigator() {
    const { user, localId } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const { data} = useGetProfileImageQuery(localId)

    useEffect(() => {
        if (data) {
            dispatch(setCameraImage(data.image))
        }
    }, [data])

    useEffect(() => {
        ; (async () => {
            try {
                const session = await fetchSession()
                //console.log('Esta es la sesion', session)
                if (session.rows.length) {
                    const user = session.rows._array[0]
                    console.log(session.rows._array[0])
                    dispatch(setUser(user))
                    console.log(user, localId)
                }
            } catch (error) {
                console.log('Error en obtener ususario', error.message)
            }
        })()
    }, [])

    return user ? <BottomTabNavigator /> : <AuthStackNavigator />

}

export default LandingNavigator