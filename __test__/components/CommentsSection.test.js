import React from 'react'
import { mount } from 'enzyme'
import CommentsSection from '../../components/CommentsSection'
import Layout from '../../components/Layout'

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
