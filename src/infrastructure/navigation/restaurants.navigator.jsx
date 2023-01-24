import React from 'react'
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack'

import RestaurantScreen from '../../features/restaurants/screens/restaurant.screen'
import RestaurantDetailScreen from '../../features/restaurants/screens/restaurant-detail.screen'

const RestaurantStack = createStackNavigator()

const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      <RestaurantStack.Screen name='restaurants' component={RestaurantScreen} />
      <RestaurantStack.Screen
        name='restaurantsDetail'
        component={RestaurantDetailScreen}
      />
    </RestaurantStack.Navigator>
  )
}

export default RestaurantsNavigator
