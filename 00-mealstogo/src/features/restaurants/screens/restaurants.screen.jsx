import React, { useContext, useState } from 'react'
import { FlatList, TouchableOpacity } from 'react-native'
import { Searchbar } from 'react-native-paper'
// COMPONENTS
import { RestaurantInfoCard } from '../components/restaurant-info-card.component.jsx'
import { Search } from '../components/search.components.jsx'
import { Spacer } from '../../../components/spacer/spacer.component.jsx'
import { FavouritesBar } from '../../../components/favourites/favourites-bar.component.jsx'
import { SafeArea } from '../../../components/utility/safe-area.component.jsx'
//
import styled from 'styled-components/native'
//
import { ActivityIndicator, Colors } from 'react-native-paper'
//
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context.jsx'
import { FavouritesContext } from '../../../services/favourites/favourites.context.jsx'

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

export const RestaurantScreen = ({ navigation }) => {
    const { isLoading, error, restaurants } = useContext(RestaurantsContext)
    const { favourites } = useContext(FavouritesContext)
    const [isToggled, setIsToggled] = useState(false)

    // console.log(navigation)
    return (
        <>
            <SafeArea>
                {isLoading && (
                    <LoadingContainer>
                        <Loading size={50} animating={true} color={Colors.blue300} />
                    </LoadingContainer>
                )}

                <Search isFavouritesToggled={isToggled} onFavouritesToggle={() => setIsToggled(!isToggled)} />
                {isToggled && <FavouritesBar />}
                <RestaurantList
                    data={restaurants}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity
                                onPress={() =>
                                    navigation.navigate('RestaurantDetail', {
                                        restaurant: item,
                                    })
                                }
                            >
                                <Spacer position='bottom' size='large'>
                                    <RestaurantInfoCard restaurant={item} />
                                </Spacer>
                            </TouchableOpacity>
                        )
                    }}
                    keyExtractor={(item) => item.name}
                    // contentContainerStyle={{padding: 16}}
                />
            </SafeArea>
        </>
    )
}
