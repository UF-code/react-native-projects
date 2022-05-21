import { StatusBar as ExpoStatusBar } from 'expo-status-bar'
// Screens
import { RestaurantScreen } from './src/features/restaurants/screens/restaurants.screen.jsx'

export default function App() {
    return (
        <>
            <RestaurantScreen />
            <ExpoStatusBar style='auto' />
        </>
    )
}
