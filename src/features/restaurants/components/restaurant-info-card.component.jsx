import React from 'react'
import { SvgXml } from 'react-native-svg'

import { Spacer } from '../../../components/spacer/spacer.component'
import { Text } from '../../../components/typography/text.component'
import Favourite from '../../../components/favourites/favourite.component'

import star from '../../../../assets/star'
import open from '../../../../assets/open'

import {
  RestaurantCard,
  CardCover,
  Info,
  Address,
  Rating,
  IconsSection,
  IconImage,
} from './restaurant-info-card.styles'

const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = 'Some Restaurant',
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
    <RestaurantCard>
      <Favourite restaurant={restaurant} />
      <CardCover
        style={{ padding: 16 }}
        key={name}
        source={{ uri: photos[0] }}
      />
      <Info>
        <Text variant='label'>{name}</Text>
        <IconsSection>
          <Rating>
            {ratingArray.map((_, index) => (
              <SvgXml
                key={`star-${placeId}-${index}`}
                xml={star}
                width={20}
                height={20}
              />
            ))}
          </Rating>

          {isClosedTemporarily && (
            <Text variant='error'>CLOSED TEMPORARILY</Text>
          )}

          <Spacer position='left' size='large'>
            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
          </Spacer>

          <Spacer position='left' size='large'>
            <IconImage source={{ uri: icon }} />
          </Spacer>
        </IconsSection>

        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  )
}

export default RestaurantInfoCard
