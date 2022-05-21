import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

export default function App() {
    return (
        <>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.search}>
                    <Text>search</Text>
                </View>
                <View style={styles.list}>
                    <Text>list</Text>
                </View>
                <StatusBar style='auto' />
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    search: { padding: 16, backgroundColor: 'green' },
    list: { flex: 1, padding: 16, backgroundColor: 'blue' },
})
