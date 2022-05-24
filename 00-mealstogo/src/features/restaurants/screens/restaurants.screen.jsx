import React from 'react'
import { StatusBar, FlatList, SafeAreaView, View } from 'react-native'
import { Searchbar } from 'react-native-paper'
// COMPONENTS
import { RestaurantInfoCard } from '../components/restaurant-info-card.component.jsx'
import { Spacer } from '../../../components/spacer/spacer.component.jsx'
//
import styled from 'styled-components/native'

const SafeArea = styled(SafeAreaView)`
    flex: 1;
    ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px;`}
`
const SearchContainer = styled(View)`
    padding: ${(props) => props.theme.space[3]};
    background-color: ${(props) => props.theme.colors.bg.primary};
`

// const isAndroid = Platform.OS === 'android'
// console.log(StatusBar.currentHeight)

export const RestaurantScreen = () => (
    <SafeArea>
        <SearchContainer>
            <Searchbar placeholder='Search' />
        </SearchContainer>

        <FlatList
            data={[
                { name: 1 },
                { name: 2 },
                { name: 3 },
                { name: 4 },
                { name: 5 },
                { name: 6 },
                { name: 7 },
                { name: 8 },
                { name: 9 },
                { name: 10 },
            ]}
            renderItem={() => (
                <Spacer position='bottom' size='large'>
                    <RestaurantInfoCard />
                </Spacer>
            )}
            keyExtractor={(item) => item.name}
            contentContainerStyle={{ padding: 16 }}
        />
    </SafeArea>
)
