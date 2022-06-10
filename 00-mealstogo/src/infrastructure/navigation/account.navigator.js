import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import { AccountScreen } from '../../features/account/screens/account.screen.jsx'
import { LoginScreen } from '../../features/account/screens/login.screen.jsx'
import { RegisterScreen } from '../../features/account/screens/register.screen.jsx'

const Stack = createStackNavigator()

export const AccountNavigator = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Main' component={AccountScreen} />
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='Register' component={RegisterScreen} />
    </Stack.Navigator>
)
