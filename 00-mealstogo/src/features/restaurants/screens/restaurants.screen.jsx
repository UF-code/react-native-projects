import React from 'react'
import { StatusBar, SafeAreaView, StyleSheet, Text, View, Platform } from 'react-native'
import { Searchbar } from 'react-native-paper'
import { RestaurantInfo } from '../components/restaurant-info.component.jsx'
// COMPONENTS

// const isAndroid = Platform.OS === 'android'
// console.log(StatusBar.currentHeight)

export const RestaurantScreen = () => (
    <SafeAreaView style={styles.container}>
        <View style={styles.search}>
            <Searchbar placeholder='Search' />
        </View>
        <View style={styles.list}>
            <RestaurantInfo />
        </View>
    </SafeAreaView>
)

const styles = StyleSheet.create({
    container: { flex: 1, marginTop: StatusBar.currentHeight },
    search: { padding: 16, backgroundColor: '#fff' },
    list: { flex: 1, padding: 16, backgroundColor: 'aqua' },
})
