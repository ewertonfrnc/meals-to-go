import React, { useState, useContext } from 'react'

import { ActivityIndicator, Colors } from 'react-native-paper'

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

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState(''),
    [password, setPassword] = useState('')

  const { onLogin, isLoading, error } = useContext(AuthenticationContext)

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
            label='Senha'
            value={password}
            textContentType='password'
            secureTextEntry
            autoCapitalize='none'
            onChangeText={(p) => setPassword(p)}
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
              icon='lock-open-outline'
              mode='contained'
              onPress={() => onLogin(email, password)}
            >
              Entrar
            </AuthButton>
          )}
        </Spacer>
      </AccountContainer>

      <Spacer size='large'>
        <AuthButton mode='contained' onPress={() => navigation.goBack()}>
          Voltar
        </AuthButton>
      </Spacer>
    </AccountBackground>
  )
}

export default LoginScreen
