import React from 'react'
import { ScrollView } from 'react-native'
import { styled } from 'styled-components/native'

const FavouritesWrapper = styled.View`
    padding: 10px;
`

export const FavouritesBar = ({ favourites }) => (
    <FavouritesWrapper>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}></ScrollView>
    </FavouritesWrapper>
)
