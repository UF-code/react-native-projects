import HomeScreen from './src/Screens/HomeScreen.jsx'

import { EventRegister } from 'react-native-event-listeners'
import React, { useState, useEffect } from 'react/cjs/react.production.min'

export default function App() {
    const [mode, setMode] = useState(false)

    useEffect(() => {
        let eventListener = EventRegister.addEventListener('changeTheme', (data) => {
            setMode(data)
            console.log(data)
        })

        return () => {
            EventRegister.removeEventListener(eventListener)
        }
    })

    return <HomeScreen />
}
