import React from 'react'
import { mount } from 'enzyme'
import CategoryItemSkeleton from './CategoryItemSkeleton'
import Layout from './Layout'

describe('<CategoryItemSkeleton />', () => {
  const categoryItemSkeleton = mount(
    <Layout>
      <CategoryItemSkeleton />
    </Layout>,
  )
  it('Should load the CategoryItemSkeleton component', () => {
    expect(categoryItemSkeleton.length).toEqual(1)
  })
})
