import React, { createContext, useContext, useEffect, useState } from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';

import login from '../services/login';

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
                    //authApiConfig.defaults.headers['Authorization'] = `Bearer ${storagedToken}`;
                    setUser(storagedUser);
                }
                setLoading(false);
            } catch (error) {
                console.log("storage error:"+ error)
            }
        }
        loadStorageData();
    }, []);

    function signIn(paramEmail, paramPassword) {
        return new Promise(async(resolve, reject)=> {
            setLoading(true);
            const info = await login(paramEmail,paramPassword).catch((err)=>{return err;});
            if(!info.error){
                console.log(info);
                //authApiConfig.defaults.headers['Authorization'] = `Bearer ${token}`;
                setUser(info.userInfo);
                await window.localStorage.setItem("@Auth:user", info.userInfo); //RN
                await window.localStorage.setItem("@Auth:token", info.token); //RN

                setLoading(false);
                resolve();
            }else{
                setLoading(false);
                reject(info.error);
            }

        })
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