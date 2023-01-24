import React, { useContext } from 'react'
import styled from 'styled-components/native'
import { List, Avatar } from 'react-native-paper'

import { SafeAreaContainer } from '../../../components/utility/safe-area.component'
import { Text } from '../../../components/typography/text.component'
import { Spacer } from '../../../components/spacer/spacer.component'

import { AuthenticationContext } from '../../../services/authentication/authentication.context'

export const SettingsItem = styled(List.Item)`
  padding: ${({ theme }) => theme.space[3]};
`

export const AvatarContainer = styled.View`
  margin-top: ${({ theme }) => theme.space[3]};
  align-items: center;
`

const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext)

  return (
    <SafeAreaContainer>
      <AvatarContainer>
        <Avatar.Icon size={180} icon='human' />

        <Spacer position='top' size='large'>
          <Text variant='label'>{user.email}</Text>
        </Spacer>
      </AvatarContainer>

      <List.Section>
        <SettingsItem
          title='Favourites'
          description='View your favourites'
          left={(props) => <List.Icon {...props} color='black' icon='heart' />}
          onPress={() => navigation.navigate('favourites')}
        />

        <SettingsItem
          title='logout'
          onPress={onLogout}
          left={(props) => <List.Icon {...props} color='black' icon='door' />}
        />
      </List.Section>
    </SafeAreaContainer>
  )
}

export default SettingsScreen
