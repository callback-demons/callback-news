import React from 'react'
import { mount } from 'enzyme'
import { ThemeProvider } from 'styled-components'
import CommentsSection from '../../components/CommentsSection'
import lightTheme from '../../styled/themes/light'

describe('<CommentsSection />', () => {
  const commentsSection = mount(
    <ThemeProvider theme={lightTheme}>
      <CommentsSection />
    </ThemeProvider>,
  )
  it('Should load the CommentsSection component', () => {
    expect(commentsSection.length).toEqual(1)
  })
})
