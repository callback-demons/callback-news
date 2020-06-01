import React from 'react'
import { mount } from 'enzyme'
import { ThemeProvider } from 'styled-components'
import Comment from '../../components/Comment'
import lightTheme from '../../styled/themes/light'

describe('<Comment />', () => {
  const comment = mount(
    <ThemeProvider theme={lightTheme}>
      <Comment comment={{
        placeholder: 'Add your comment',
        rows: 1,
        buttonText: 'Comment',
      }}
      />
    </ThemeProvider>,
  )
  it('Should load the Comment component', () => {
    expect(comment.length).toEqual(1)
  })
})
