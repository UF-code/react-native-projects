import React, { useState, createContext } from 'react'
import * as firebase from 'firebase'
import 'firebase/auth'
// import { loginRequest } from './authentication.service.js'

export const AuthenticationContext = createContext()

export const AuthenticationContextProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)

    const onLogin = (email, password) => {
        setIsLoading(true)
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((u) => {
                setUser(u)
                setIsLoading(false)
            })
            .catch((e) => {
                setIsLoading(false)
                setError(e.toString())
            })
    }

    return (
        <AuthenticationContext.Provider
            value={{
                isAuthenticated: !!user,
                user,
                isLoading,
                error,
                onLogin,
            }}
        >
            {children}
        </AuthenticationContext.Provider>
    )
}
