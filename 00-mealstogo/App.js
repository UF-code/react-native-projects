import { StatusBar as ExpoStatusBar } from 'expo-status-bar'
import { Text } from 'react-native'
// Screens
import { RestaurantScreen as Restaurants } from './src/features/restaurants/screens/restaurants.screen.jsx'
// Theme
import { ThemeProvider } from 'styled-components/native'
import { theme } from './src/infrastructure/theme/index.js'
// Fonts
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald'
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato'
//
import { SafeArea } from './src/components/utility/safe-area.component.jsx'
//
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
const Tab = createBottomTabNavigator()

const Settings = () => (
    <SafeArea>
        <Text>Settings</Text>
    </SafeArea>
)
const Map = () => (
    <SafeArea>
        <Text>Map</Text>
    </SafeArea>
)

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
                <NavigationContainer>
                    <Tab.Navigator>
                        <Tab.Screen name='Restaurants' component={Restaurants} />
                        <Tab.Screen name='Map' component={Map} />
                        <Tab.Screen name='Settings' component={Settings} />
                    </Tab.Navigator>
                </NavigationContainer>
                <ExpoStatusBar style='auto' />
            </ThemeProvider>
        </>
    )
}
