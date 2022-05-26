import React, { useState, createContext, useEffect, useMemo } from 'react'

import { restaurantRequest, restaurantsTransform } from './restaurants.service.jsx'

export const RestaurantsContext = createContext()

export const RestaurantsContextProvider = ({ children }) => {
    return (
        <RestaurantsContext.Provider
            value={{
                restaurants: [1, 2, 3, 4, 5, 6],
            }}
        >
            {children}
        </RestaurantsContext.Provider>
    )
}