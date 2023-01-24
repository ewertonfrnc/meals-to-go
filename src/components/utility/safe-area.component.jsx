import styled from 'styled-components'
import { SafeAreaView, StatusBar } from 'react-native'

export const SafeAreaContainer = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${Platform.OS === 'android' && StatusBar.currentHeight}px;
  background-color: ${({ theme }) => theme.colors.bg.primary};
`
