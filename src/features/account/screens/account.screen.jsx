import { Spacer } from '../../../components/spacer/spacer.component'
import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  Title,
} from '../components/authetication.styles'

const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />

      <AccountContainer>
        <Spacer position='bottom' size='large'>
          <Title>Meals To Go</Title>
        </Spacer>

        <AuthButton
          mode='contained'
          onPress={() => navigation.navigate('login')}
        >
          Entrar
        </AuthButton>

        <Spacer size='large'>
          <AuthButton
            mode='contained'
            onPress={() => navigation.navigate('register')}
          >
            Registrar
          </AuthButton>
        </Spacer>
      </AccountContainer>
    </AccountBackground>
  )
}

export default AccountScreen
