import { StatusBar as ExpoStatusBar } from 'expo-status-bar'
import React from 'react'
import { ThemeProvider } from 'styled-components/native'

import * as firebase from 'firebase'

import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald'
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato'

import { theme } from './src/infrastructure/theme'
import { Navigation } from './src/infrastructure/navigation'

import { RestaurantsContextProvider } from './src/services/restaurants/restaurants.context.jsx'
import { LocationContextProvider } from './src/services/location/location.context.jsx'
import { FavouritesContextProvider } from './src/services/favourites/favourites.context.jsx'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyCcby9SHsm-bjwMupvbdfq8s1WVdesYumk',
    authDomain: 'mealstogo-612bb.firebaseapp.com',
    projectId: 'mealstogo-612bb',
    storageBucket: 'mealstogo-612bb.appspot.com',
    messagingSenderId: '126895014542',
    appId: '1:126895014542:web:887bb48662130161f4ffdf',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

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
