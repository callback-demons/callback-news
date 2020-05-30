import React from 'react'
import styled from 'styled-components'
import CategoryItem from './CategoryItem'

const CategoryListContainer = styled.div`
  z-index: 2;
  display: grid;
  grid-gap: 25px;
  overflow: auto;
  padding: 10px 20px;
  position: relative;
  white-space: nowrap;
  grid-auto-flow: column;
`

const CategoryItemList = (props) => {
  const { data = [] } = props
  return (
    <CategoryListContainer>
      {
        data.length > 0 ?
          data.map(
            (item, index) => <CategoryItem title={item.name} srcImage={item.picture} categoryColor={item.color} id={item.id} key={item.id} />,
          ) :
          <>
            {
              Array.from(Array(7).keys()).map(() => <CategoryItem />)
            }
          </>
      }
    </CategoryListContainer>
  )
}

export default CategoryItemList
