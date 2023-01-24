import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

import AccountScreen from '../../features/account/screens/account.screen'
import RegisterScreen from '../../features/account/screens/register.screen'
import LoginScreen from '../../features/account/screens/login.screen'

const Stack = createStackNavigator()

import React from 'react'

const AccountNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='main' component={AccountScreen} />
      <Stack.Screen name='login' component={LoginScreen} />
      <Stack.Screen name='register' component={RegisterScreen} />
    </Stack.Navigator>
  )
}

export default AccountNavigator
