import React from 'react'
import { mount } from 'enzyme'
import CategoryItemSkeleton from '../../components/CategoryItemSkeleton'
import Layout from '../../components/Layout'

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
