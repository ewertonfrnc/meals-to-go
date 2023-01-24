import styled from 'styled-components/native'
import { Card } from 'react-native-paper'

export const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  margin-bottom: ${(props) => props.theme.space[3]};
`

export const CardCover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`

export const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
`

export const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`

export const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`

export const IconsSection = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Rating = styled.View`
  flex-direction: row;
  margin-right: auto;
  padding: ${(props) => props.theme.space[2]} 0;
`

export const IconImage = styled.Image`
  width: 15px;
  height: 15px;
`
