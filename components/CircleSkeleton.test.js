import React from 'react'
import { mount } from 'enzyme'
import CircleSkeleton from './CircleSkeleton'
import Layout from './Layout'

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
