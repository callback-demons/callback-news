import React from 'react'
import { mount } from 'enzyme'
import CircleSkeleton from '../../components/CircleSkeleton'
import Layout from '../../components/Layout'

describe('<CircleSkeleton />', () => {
  const circleSkeleton = mount(
    <Layout>
      <CircleSkeleton />
    </Layout>,
  )
  it('Should load the CircleSkeleton component', () => {
    expect(circleSkeleton.length).toEqual(1)
  })
})
