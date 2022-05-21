import { StatusBar as ExpoStatusBar } from 'expo-status-bar'
import { StatusBar, SafeAreaView, StyleSheet, Text, View, Platform } from 'react-native'

const isAndroid = Platform.OS === 'android'

console.log(StatusBar.currentHeight)

export default function App() {
    return (
        <>
            <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
                <View style={styles.search}>
                    <Text>search</Text>
                </View>
                <View style={styles.list}>
                    <Text>list</Text>
                </View>
                <ExpoStatusBar style='auto' />
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    search: { padding: 16, backgroundColor: 'green' },
    list: { flex: 1, padding: 16, backgroundColor: 'blue' },
})
