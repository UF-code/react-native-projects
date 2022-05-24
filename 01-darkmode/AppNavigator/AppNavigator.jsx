import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../src/Screens/HomeScreen.jsx'
import ProfileScreen from '../src/Screens/ProfileScreen.jsx'

const AppNavigator = () => {
    const Stack = createStackNavigator()
    return (
        <Stack.Navigator>
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='Profile' component={ProfileScreen} />
        </Stack.Navigator>
    )
}

export default AppNavigator
