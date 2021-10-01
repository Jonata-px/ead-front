import React, { createContext, useContext, useEffect, useState } from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';

import { authApiConfig, login } from '../services/authAxios'

const authContextData = {
    signed: Boolean,
    user: String | null,
    loading: Boolean,
    signIn: (async () => { }),
    signOut: (async () => { })
}

const AuthContexts = createContext(authContextData);

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(String | null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadStorageData() {
            try {
                const storagedUser = window.localStorage.getItem("@Auth:user"); //RN
                const storagedToken = window.localStorage.getItem("@Auth:token"); //RN

                if (storagedUser && storagedToken) {
                    console.log(storagedUser)
                    authApiConfig.defaults.headers['Authorization'] = `Bearer ${storagedToken}`;
                    setUser(storagedUser);
                }
                setLoading(false);
            } catch (error) {
                console.log(error)
            }
        }
        loadStorageData();
    }, []);

    async function signIn(paramEmail, paramPassword) {
        try {
            setLoading(true);

            const { message, token } = await login(paramEmail, paramPassword);
            console.log(message);
            authApiConfig.defaults.headers['Authorization'] = `Bearer ${token}`;

            setUser(message);
            await window.localStorage.setItem("@Auth:user", message); //RN
            await window.localStorage.setItem("@Auth:token", token); //RN

            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    async function signOut() {
        try {
            window.localStorage.removeItem('@Auth:user');
            window.localStorage.removeItem('@Auth:token');
            setUser(null);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <AuthContexts.Provider value={{ signed: !!user, user, loading, signIn, signOut }}>
            {children}
        </AuthContexts.Provider>
    );
};

export function useAuth() {
    const context = useContext(AuthContexts);

    return context;
}