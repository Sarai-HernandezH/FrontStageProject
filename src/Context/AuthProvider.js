// AuthProvider.js
import React, { createContext, useEffect, useContext, useReducer } from 'react';
import { setUser, clearUser } from '../features/auth/authSlice'
import { fetchSession } from '../db/'


const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

const initialState = {
    user: null,
    localId: null,
    token: null,
    // ... other authentication-related state
};

const authReducer = (state, action) => {
    switch (action.type) {
        case 'SET_USER':
            return { ...state, user: action.payload };
        case 'CLEAR_USER':
            return { ...state, user: null };
        // ... handle other actions
        default:
            return state;
    }
};

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    useEffect(() => {
        // Fetch the user session and set it in the context
        const session = fetchSession();
        if (session) {
            dispatch({ type: 'SET_USER', payload: session });
        } else {
            dispatch({ type: 'CLEAR_USER' });
        }
    }, []);

    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};
