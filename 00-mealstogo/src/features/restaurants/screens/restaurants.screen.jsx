import React from 'react'
import { StatusBar, SafeAreaView, StyleSheet, Text, View, Platform } from 'react-native'
import { Searchbar } from 'react-native-paper'
// COMPONENTS
import { RestaurantInfoCard } from '../components/restaurant-info-card.component.jsx'
//
import styled from 'styled-components/native'

const SafeArea = styled(SafeAreaView)`
    flex: 1;
    margin-top: ${StatusBar.currentHeight}px;
`
const SearchContainer = styled(View)`
    padding: 16px;
    background-color: #fff;
`
const RestaurantListContainer = styled(View)`
    flex: 1;
    padding: 16px;
    background-color: aqua;
`

// const isAndroid = Platform.OS === 'android'
// console.log(StatusBar.currentHeight)

export const RestaurantScreen = () => (
    <SafeArea>
        <SearchContainer>
            <Searchbar placeholder='Search' />
        </SearchContainer>
        <RestaurantListContainer>
            <RestaurantInfoCard />
        </RestaurantListContainer>
    </SafeArea>
)

const styles = StyleSheet.create({})
