import React from 'react'
import SettingsScreen from '../../features/settings/screens/settings.screen'
import FavouritesScreen from '../../features/settings/screens/favourites.screen'

import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack'

const SettingsStack = createStackNavigator()

const SettingsNavigator = ({ route, navigation }) => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        options={{
          header: () => null,
        }}
        name='settings'
        component={SettingsScreen}
      />
      <SettingsStack.Screen name='favourites' component={FavouritesScreen} />
    </SettingsStack.Navigator>
  )
}

export default SettingsNavigator
