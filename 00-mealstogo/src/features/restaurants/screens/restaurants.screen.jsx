import React, { useContext } from 'react'
import { FlatList } from 'react-native'
import { Searchbar } from 'react-native-paper'
// COMPONENTS
import { RestaurantInfoCard } from '../components/restaurant-info-card.component.jsx'
import { Spacer } from '../../../components/spacer/spacer.component.jsx'
import { SafeArea } from '../../../components/utility/safe-area.component.jsx'
//
import styled from 'styled-components/native'
//
import { ActivityIndicator, Colors } from 'react-native-paper'
//
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context.jsx'

const SearchContainer = styled.View`
    padding: ${(props) => props.theme.space[3]};
    background-color: ${(props) => props.theme.colors.bg.primary};
`

// const RestaurantList = styled(FlatList)`
//     padding: 16px;
// `
const RestaurantList = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 16,
    },
})``

const Loading = styled(ActivityIndicator)`
    margin-left: -25px;
`
const LoadingContainer = styled.View`
    position: absolute;
    top: 50%;
    left: 50%;
`

// const isAndroid = Platform.OS === 'android'
// console.log(StatusBar.currentHeight)

export const RestaurantScreen = () => {
    const { isLoading, error, restaurants } = useContext(RestaurantsContext)

    return (
        <>
            {isLoading && (
                <LoadingContainer>
                    <Loading size={50} animating={true} color={Colors.blue300} />
                </LoadingContainer>
            )}
            <SearchContainer>
                <Searchbar placeholder='Search' />
            </SearchContainer>

            <RestaurantList
                data={restaurants}
                renderItem={({ item }) => {
                    return (
                        <Spacer position='bottom' size='large'>
                            <RestaurantInfoCard restaurant={item} />
                        </Spacer>
                    )
                }}
                keyExtractor={(item) => item.name}
                // contentContainerStyle={{padding: 16}}
            />
        </>
    )
}
