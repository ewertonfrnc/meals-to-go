import React, { useContext, useState, useEffect } from 'react'
import styled from 'styled-components/native'
import { Searchbar } from 'react-native-paper'

import { LocationContext } from '../../../services/location/location.context'

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  width: 100%;
  z-index: 999;
  position: absolute;
  top: 40px;
`

const Search = () => {
  const { keyword, search } = useContext(LocationContext)
  const [searchKeyword, setSearchKeyword] = useState(keyword)

  useEffect(() => {
    setSearchKeyword(keyword)
  }, [keyword])

  return (
    <SearchContainer>
      <Searchbar
        placeholder='Search'
        icon='map'
        value={searchKeyword}
        onSubmitEditing={() => search(searchKeyword)}
        onChangeText={(text) => setSearchKeyword(text)}
      />
    </SearchContainer>
  )
}

export default Search
