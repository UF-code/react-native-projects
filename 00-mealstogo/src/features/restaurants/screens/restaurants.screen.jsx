import React from 'react'
import { StatusBar, SafeAreaView, StyleSheet, Text, View, Platform } from 'react-native'
import { Searchbar } from 'react-native-paper'
// COMPONENTS
import { RestaurantInfoCard } from '../components/restaurant-info-card.component.jsx'
//
import styled from 'styled-components/native'

const Search = styled(View)`
    padding: 16px;
    background-color: #fff;
`
const List = styled(View)`
    flex: 1;
    padding: 16px;
    background-color: aqua;
`

// const isAndroid = Platform.OS === 'android'
// console.log(StatusBar.currentHeight)

export const RestaurantScreen = () => (
    <SafeAreaView style={styles.container}>
        <Search>
            <Searchbar placeholder='Search' />
        </Search>
        <List>
            <RestaurantInfoCard />
        </List>
    </SafeAreaView>
)

const styles = StyleSheet.create({
    container: { flex: 1, marginTop: StatusBar.currentHeight },
})
