import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    user: null,
    token: null,
    localId: null,
    imageCamera: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        setUser: (state, action) => {
            return{
                ...state,
                user: action.payload.email,
                token: action.payload.idToken,
                localId: action.payload.localId,
            }
        },
        signOut: (state) => {
            state.user = null;
            state.token = null;
            state.localId = null;
        },
        setCameraImage: (state, action) =>{
            return{
                ...state,
                imageCamera: action.payload,
            }
        }
    },
})

export const {setUser, signOut, setCameraImage} = authSlice.actions

export default authSlice.reducer