import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`
const Search = styled.input`
  font-size:34px;
  width:100%;
  border: none;
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
const SearchBar = () => {
  return (
    <Container>
      <Search type="text" placeholder="Search for news..." />
    </Container>
  )
}

export default SearchBar
