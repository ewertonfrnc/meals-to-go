import { ScrollView, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

import { Text } from '../typography/text.component'
import { Spacer } from '../spacer/spacer.component'
import CompactRestaurantInfo from '../restaurant/compact-restaurant-info.component'

const FavouritesWrapper = styled.View`
  padding: ${(props) => props.theme.space[3]};
`

const FavouriteWrapper = styled.View`
  margin: ${(props) => props.theme.space[1]};
`

const FavouritesBar = ({ favourites, onNavigate }) => {
  if (!favourites.length) return

  return (
    <FavouritesWrapper>
      <Spacer variant='left.large'>
        <Text variant='hint'>Favoritos</Text>
      </Spacer>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => (
          <FavouriteWrapper key={restaurant.name}>
            <TouchableOpacity
              onPress={() => onNavigate('restaurantsDetail', { restaurant })}
            >
              <CompactRestaurantInfo restaurant={restaurant} />
            </TouchableOpacity>
          </FavouriteWrapper>
        ))}
      </ScrollView>
    </FavouritesWrapper>
  )
}

export default FavouritesBar
