import React from 'react'
import { mount } from 'enzyme'
import CommentsSection from './CommentsSection'
import Layout from './Layout'

describe('<CommentsSection />', () => {
  const commentsSection = mount(
    <Layout>
      <CommentsSection />
    </Layout>,
  )
  it('Should load the CommentsSection component', () => {
    expect(commentsSection.length).toEqual(1)
  })
})
