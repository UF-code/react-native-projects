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

// const isAndroid = Platform.OS === 'android'
// console.log(StatusBar.currentHeight)

export const RestaurantScreen = () => {
    const { isLoading, error, restaurants } = useContext(RestaurantsContext)

    return (
        <>
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
