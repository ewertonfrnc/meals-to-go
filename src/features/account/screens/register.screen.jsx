import React, { useState, useContext } from 'react'
import { ActivityIndicator } from 'react-native-paper'
import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  AuthInput,
  ErrorContainer,
} from '../components/authetication.styles'

import { Text } from '../../../components/typography/text.component'
import { Spacer } from '../../../components/spacer/spacer.component'

import { AuthenticationContext } from '../../../services/authentication/authentication.context'

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState(''),
    [password, setPassword] = useState(''),
    [repeatedPassword, setRepeatedPassword] = useState('')

  const { onRegister, isLoading, error } = useContext(AuthenticationContext)

  return (
    <AccountBackground>
      <AccountCover />

      <AccountContainer>
        <AuthInput
          label='E-mail'
          value={email}
          textContentType='emailAddress'
          keyboardType='email-address'
          autoCapitalize='none'
          onChangeText={(u) => setEmail(u)}
        />
        <Spacer size='large'>
          <AuthInput
            label='Password'
            value={password}
            textContentType='password'
            secureTextEntry
            autoCapitalize='none'
            onChangeText={(p) => setPassword(p)}
          />
        </Spacer>

        <Spacer size='large'>
          <AuthInput
            label='Confirm password'
            value={repeatedPassword}
            textContentType='password'
            secureTextEntry
            autoCapitalize='none'
            onChangeText={(p) => setRepeatedPassword(p)}
          />
        </Spacer>

        {error && (
          <ErrorContainer size='large'>
            <Text variant='error'>{error}</Text>
          </ErrorContainer>
        )}

        <Spacer size='large'>
          {isLoading ? (
            <ActivityIndicator animating={true} />
          ) : (
            <AuthButton
              icon='email'
              mode='contained'
              onPress={() => onRegister(email, password, repeatedPassword)}
            >
              Register
            </AuthButton>
          )}
        </Spacer>
      </AccountContainer>
    </AccountBackground>
  )
}

export default RegisterScreen
