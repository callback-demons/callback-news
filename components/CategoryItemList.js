import React from 'react'
import styled from 'styled-components'
import CategoryItem from './CategoryItem'

const CategoryListContainer = styled.div`
  display: grid;
  grid-gap: 25px;
  overflow: auto;
  padding: 10px 20px;
  white-space: nowrap;
  grid-auto-flow: column;
`

const CategoryItemList = (props) => {
  const { data = [] } = props
  console.log(props)
  console.log(data.length)
  return (
    <CategoryListContainer>
      {
        data.length > 0 ?
          data.map(
            (item, index) => <CategoryItem title={item.title} srcImage={item.image} categoryColor={item.color} key={index} />,
          ) :
          <>
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
          </>
      }
    </CategoryListContainer>
  )
}

export default CategoryItemList
