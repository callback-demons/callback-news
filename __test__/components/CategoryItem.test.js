import React from 'react'
import { mount } from 'enzyme'
import CategoryItem from '../../components/CategoryItem'
import Layout from '../../components/Layout'

describe('<CategoryItem />', () => {
  const categoryItem = mount(
    <Layout>
      <CategoryItem />
    </Layout>,
  )
  it('Should load the CategoryItem component', () => {
    expect(categoryItem.length).toEqual(1)
  })
})
