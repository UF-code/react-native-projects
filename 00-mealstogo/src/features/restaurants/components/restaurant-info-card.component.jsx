import React from 'react'
import star from '../../../../assets/star'
import open from '../../../../assets/open'
// components
import { Spacer } from '../../../components/spacer/spacer.component.jsx'
import { Text } from '../../../components/typography/text.component.jsx'
// styles
import {
    Icon,
    Info,
    RestaurantCard,
    RestaurantCardCover,
    Address,
    Rating,
    Section,
    SectionEnd,
    Open,
    Star,
} from './restaurant-info-card.styles.jsx'

export const RestaurantInfoCard = ({ restaurant = {} }) => {
    const {
        name = 'Some restaurant',
        icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
        photos = [
            'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
        ],
        address = '100 some random street',
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily = true,
        placeId,
    } = restaurant

    const ratingArray = Array.from(new Array(Math.floor(rating)))

    return (
        <RestaurantCard elevation={5}>
            <RestaurantCardCover key={name} source={{ uri: photos[0] }} />

            <Info>
                <Text variant={'label'}>{name}</Text>

                <Section>
                    <Rating>
                        {ratingArray.map((_, i) => (
                            <Star key={`star-${placeId}-${i}`} xml={star} width={20} height={20} />
                        ))}
                    </Rating>
                    <SectionEnd>
                        {isClosedTemporarily && (
                            <Text variant='error' style={{ color: 'red' }}>
                                CLOSED TEMPORARILY
                            </Text>
                        )}

                        <Spacer position='left' size='large'>
                            {isOpenNow && <Open xml={open} width={20} height={20} />}
                        </Spacer>

                        <Spacer position='left' size='large'>
                            <Icon source={{ uri: icon }} />
                        </Spacer>
                    </SectionEnd>
                </Section>

                <Address>{address}</Address>
            </Info>
        </RestaurantCard>
    )
}
