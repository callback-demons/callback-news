import React from 'react'
import { mount } from 'enzyme'
import Comment from './Comment'
import Layout from './Layout'

describe('<Comment />', () => {
  const comment = mount(
    <Layout>
      <Comment />
    </Layout>,
  )
  it('Should load the Comment component', () => {
    expect(comment.length).toEqual(1)
  })
})
