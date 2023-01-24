import { useContext, useState } from 'react'
import styled from 'styled-components/native'
import { Searchbar } from 'react-native-paper'
import { LocationContext } from '../../../services/location/location.context'

export const SearchContainer = styled.View`
  flex: 0.1;
  padding: ${(props) => props.theme.space[3]};
`

const Search = ({ isFavouritesToggled, onFavouritesToggled }) => {
  const { keyword, search } = useContext(LocationContext)
  const [searchKeyword, setSearchKeyword] = useState(keyword)

  return (
    <SearchContainer>
      <Searchbar
        icon={isFavouritesToggled ? 'heart' : 'heart-outline'}
        onIconPress={onFavouritesToggled}
        placeholder='Search'
        value={searchKeyword}
        onSubmitEditing={() => search(searchKeyword)}
        onChangeText={(text) => setSearchKeyword(text)}
      />
    </SearchContainer>
  )
}

export default Search
