import { useContext, useState } from 'react'
import { Pressable, TouchableOpacity } from 'react-native'
import { ActivityIndicator } from 'react-native-paper'

import { SafeAreaContainer } from '../../../components/utility/safe-area.component'
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context'
import { FavouritesContext } from '../../../services/favourites/favourites.context'

import RestaurantInfoCard from '../components/restaurant-info-card.component'
import Search from '../components/search.component'
import FavouritesBar from '../../../components/favourites/favourites-bar.component'

import { ListContainer, List, LoadingContainer } from './restaurant.styles'

const RestaurantScreen = ({ navigation }) => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext)
  const { favourites } = useContext(FavouritesContext)

  const [isToggled, setIsToggled] = useState(false)

  return (
    <SafeAreaContainer>
      <Search
        isFavouritesToggled={isToggled}
        onFavouritesToggled={() => setIsToggled(!isToggled)}
      />

      {isToggled && (
        <FavouritesBar onNavigate={navigation.navigate} favourites={favourites} />
      )}

      <ListContainer>
        {isLoading ? (
          <LoadingContainer>
            <ActivityIndicator animating={true} size='large' />
          </LoadingContainer>
        ) : (
          <List
            data={restaurants}
            renderItem={({ item }) => (
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() =>
                  navigation.navigate('restaurantsDetail', { restaurant: item })
                }
              >
                <RestaurantInfoCard restaurant={item} />
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.name}
          />
        )}
      </ListContainer>
    </SafeAreaContainer>
  )
}

export default RestaurantScreen
