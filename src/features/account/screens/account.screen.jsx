import LottieView from 'lottie-react-native'

import { Spacer } from '../../../components/spacer/spacer.component'
import {
  AnimationWrapper,
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

      <AnimationWrapper>
        <LottieView
          key='animation'
          autoPlay
          loop
          resizeMode='cover'
          source={require('../../../../assets/delivery.json')}
        />
      </AnimationWrapper>

      <AccountContainer>
        <Spacer position='bottom' size='large'>
          <Title>Meals To Go</Title>
        </Spacer>

        <AuthButton
          mode='contained'
          onPress={() => navigation.navigate('login')}
        >
          Login
        </AuthButton>

        <Spacer size='large'>
          <AuthButton
            mode='contained'
            onPress={() => navigation.navigate('register')}
          >
            Register
          </AuthButton>
        </Spacer>
      </AccountContainer>
    </AccountBackground>
  )
}

export default AccountScreen
