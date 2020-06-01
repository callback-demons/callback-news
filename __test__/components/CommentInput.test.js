import React from 'react'
import { mount } from 'enzyme'
import CommentInput from '../../components/CommentInput'
import Layout from '../../components/Layout'

describe('<CommentInput />', () => {
  const commentInput = mount(
    <Layout>
      <CommentInput />
    </Layout>,
  )
  it('Should load the CommentInput component', () => {
    expect(commentInput.length).toEqual(1)
  })
})
