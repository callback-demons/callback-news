import React from 'react'
import styled from 'styled-components'
import CategoryItem from './CategoryItem'

const Container = styled.div`
  z-index: 2;
  display: grid;
  grid-gap: 25px;
  overflow: auto;
  padding: 10px 20px;
  position: relative;
  white-space: nowrap;
  grid-auto-flow: column;
  /* width:calc(100% - 40px); */
`

const CategoryItemList = (props) => {
  const { data = [] } = props
  return (
    <Container>
      {
        data.length > 0 ?
          data.map(
            (item, index) => <CategoryItem title={item.name} srcImage={item.picture} categoryColor={item.color} key={item.id} />,
          ) :
          <>
            {
              Array.from(Array(7).keys()).map(() => <CategoryItem />)
            }
          </>
      }
    </Container>
  )
}

export default CategoryItemList
