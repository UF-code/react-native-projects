import { StatusBar as ExpoStatusBar } from 'expo-status-bar'
// Screens
import { RestaurantScreen } from './src/features/restaurants/screens/restaurants.screen.jsx'
// Theme
import { ThemeProvider } from 'styled-components/native'
import { theme } from './src/infrastructure/theme/index.js'

export default function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <RestaurantScreen />
                <ExpoStatusBar style='auto' />
            </ThemeProvider>
        </>
    )
}
