import { useContext } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import RestaurantsNavigator from './restaurants.navigator'
import SettingsNavigator from './settings.navigator'
import MapScreen from '../../features/map/screens/map.screen'

import { FavouritesContextProvider } from '../../services/favourites/favourites.context'
import { LocationContextProvider } from '../../services/location/location.context'
import { RestaurantsProvider } from '../../services/restaurants/restaurants.context'

const Tab = createBottomTabNavigator()

const TAB_ICON = {
  restaurants: 'md-restaurant',
  map: 'md-map',
  settings: 'md-settings',
}

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name]

  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    tabBarActiveTintColor: 'tomato',
    tabBarInactiveTintColor: 'gray',
    headerShown: false,
  }
}

const AppNavigator = () => {
  return (
    <FavouritesContextProvider>
      <LocationContextProvider>
        <RestaurantsProvider>
          <Tab.Navigator screenOptions={createScreenOptions}>
            <Tab.Screen name='restaurants' component={RestaurantsNavigator} />
            <Tab.Screen name='map' component={MapScreen} />
            <Tab.Screen name='settings' component={SettingsNavigator} />
          </Tab.Navigator>
        </RestaurantsProvider>
      </LocationContextProvider>
    </FavouritesContextProvider>
  )
}

export default AppNavigator
