import React, { useState } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import SearchIcon from './SearchIcon'

const Container = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: row;
`

const Search = styled.input`
  width:100%;
  border: none;
  font-size:32px;
  margin-top: 1px;
  margin-right: 8px;
  border-bottom: ${(props) => props.theme.color.ultraGray} solid 2px;
  transition: 0.3s;
  &:focus{
    outline: none;
  }
  &::placeholder{
    color: ${(props) => props.theme.color.ultraGray};
    font-family: ${(props) => props.theme.fontFamilyText};
    font-size: 1em;
  }
`

const CustomSearchIcon = styled(SearchIcon)`
  cursor: pointer;
  margin: 12px -40px;
`

const SearchBar = () => {
  const router = useRouter()
  const [query, setQuery] = useState(null)
  const handleChange = (event) => {
    setQuery(event.target.value)
  }
  const handleSearch = (event) => {
    event.preventDefault()
    if (!query) return
    router.push(`/search?title=${query}`)
    // console.log(query)
  }
  return (
    <Container onSubmit={handleSearch}>
      <InputContainer>
        <Search type="text" placeholder="Search for news..." onChange={handleChange} />
        <CustomSearchIcon onClick={handleSearch} />
      </InputContainer>
    </Container>
  )
}

export default SearchBar
