import React, { useEffect, useState } from 'react';
import AuthStackNavigator from './AuthStackNavigator';
import BottomTabNavigator from './BottomTabNavigator';
import { useDispatch, useSelector } from 'react-redux';
import { useGetProfileImageQuery } from '../services/shopApi';
import { setCameraImage, setUser } from '../features/auth/authSlice';
import { fetchSession } from '../db';


const MainNavigator = () => {
    const {user, localId} = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const {data, error, isLoading} = useGetProfileImageQuery(localId)

    useEffect (() => {
        console.log('Main navigator data', data)
        if (data){
            dispatch(setCameraImage(data.image))
        }
    }, [data])

    useEffect(() => {
        ;(async () =>{
            try{
                const session = await fetchSession();
                console.log("Esta es la sesion", session)
                if(session.row.length){
                    console.log(session.rows._array[0])
                    const user = session.rows._array[0]
                    dispatch(setUser(user))
                }
            }catch (error) {
                console.log('Error en obterner usuario', error.message)
            }
        })()
    }, [])
    return  user ? <BottomTabNavigator /> : <AuthStackNavigator />
    
}

export default MainNavigator