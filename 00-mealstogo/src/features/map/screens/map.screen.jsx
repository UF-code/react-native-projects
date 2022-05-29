import React, { useContext, useState, useEffect } from 'react'
import MapView from 'react-native-maps'
import styled from 'styled-components/native'

import { Search } from '../components/search.component.jsx'

import { LocationContext } from '../../../services/location/location.context.jsx'
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context.jsx'

const Map = styled(MapView)`
    height: 100%;
    width: 100%;
`

export const MapScreen = () => {
    const { location } = useContext(LocationContext)
    const { restaurants = [] } = useContext(RestaurantsContext)

    const [latDelta, setLatDelta] = useState(0)

    const { viewport } = location

    useEffect(() => {
        const northeastLat = viewport.northeast.lat
        const southwestLat = viewport.southwest.lat

        const latDelta = northeastLat - southwestLat
        setLatDelta(latDelta)
    }, [location])

    return (
        <>
            <Search />
            <Map>
                {restaurants.map((restaurant) => {
                    return null
                })}
            </Map>
        </>
    )
}
