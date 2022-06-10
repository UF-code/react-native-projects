import { StatusBar as ExpoStatusBar } from 'expo-status-bar'
import React, { useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components/native'

import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald'
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato'

import { theme } from './src/infrastructure/theme'
import { Navigation } from './src/infrastructure/navigation'

import { RestaurantsContextProvider } from './src/services/restaurants/restaurants.context.jsx'
import { LocationContextProvider } from './src/services/location/location.context.jsx'
import { FavouritesContextProvider } from './src/services/favourites/favourites.context.jsx'

// FIREBASE

import * as firebase from 'firebase'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: 'AIzaSyAtxUacoqj-NPgkpqJYI7G9DClKim5_4cg',
    authDomain: 'mealstogo-b724b.firebaseapp.com',
    projectId: 'mealstogo-b724b',
    storageBucket: 'mealstogo-b724b.appspot.com',
    messagingSenderId: '1029680494843',
    appId: '1:1029680494843:web:dc4d602792a5c6033ed85e',
}

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

// FIREBASE

export default function App() {
    const [oswaldLoaded] = useOswald({
        Oswald_400Regular,
    })

    const [latoLoaded] = useLato({
        Lato_400Regular,
    })

    if (!oswaldLoaded || !latoLoaded) {
        return null
    }

    return (
        <>
            <ThemeProvider theme={theme}>
                <FavouritesContextProvider>
                    <LocationContextProvider>
                        <RestaurantsContextProvider>
                            <Navigation />
                        </RestaurantsContextProvider>
                    </LocationContextProvider>
                </FavouritesContextProvider>
            </ThemeProvider>
            <ExpoStatusBar style='auto' />
        </>
    )
}
