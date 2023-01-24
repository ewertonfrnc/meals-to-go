import React, { useContext } from 'react'
import styled from 'styled-components/native'
import { AntDesign } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'

import { FavouritesContext } from '../../services/favourites/favourites.context'

const FavouriteButton = styled(TouchableOpacity)`
  z-index: 999;
  position: absolute;
  top: 25px;
  right: 25px;
`

const Favourite = ({ restaurant }) => {
  const { favourites, addToFavourites, removeFromFavourites } =
    useContext(FavouritesContext)

  const isFavorite = favourites.find(
    (rest) => rest.placeId === restaurant.placeId
  )

  return (
    <FavouriteButton
      onPress={() =>
        !isFavorite
          ? addToFavourites(restaurant)
          : removeFromFavourites(restaurant)
      }
    >
      <AntDesign
        name={isFavorite ? 'heart' : 'hearto'}
        size={30}
        color={isFavorite ? 'red' : 'white'}
      />
    </FavouriteButton>
  )
}
export default Favourite
