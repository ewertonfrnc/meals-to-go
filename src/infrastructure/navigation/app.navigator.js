import { useContext } from 'react'
import { Text, Button } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import RestaurantsNavigator from './restaurants.navigator'
import MapScreen from '../../features/map/screens/map.screen'

import { AuthenticationContext } from '../../services/authentication/authentication.context'
import { FavouritesContextProvider } from '../../services/favourites/favourites.context'
import { LocationContextProvider } from '../../services/location/location.context'
import { RestaurantsProvider } from '../../services/restaurants/restaurants.context'

import { SafeAreaContainer } from '../../components/utility/safe-area.component'

function SettingsScreen() {
  const { onLogout } = useContext(AuthenticationContext)
  return (
    <SafeAreaContainer
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <Text>Settings!</Text>
      <Button title='Sair' onPress={() => onLogout()} />
    </SafeAreaContainer>
  )
}

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
            <Tab.Screen name='settings' component={SettingsScreen} />
          </Tab.Navigator>
        </RestaurantsProvider>
      </LocationContextProvider>
    </FavouritesContextProvider>
  )
}

export default AppNavigator
