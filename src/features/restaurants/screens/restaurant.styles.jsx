import styled from 'styled-components/native'
import { FlatList } from 'react-native'

export const SearchContainer = styled.View`
  flex: 0.1;
  padding: ${(props) => props.theme.space[3]};
`

export const ListContainer = styled.View`
  flex: 0.9;
  padding: 0 ${(props) => props.theme.space[3]};
`

export const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 4,
  },
})``

export const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`
