import React from 'react'
import { mount } from 'enzyme'
import { ThemeProvider } from 'styled-components'
import CommentInput from '../../components/CommentInput'
import lightTheme from '../../styled/themes/light'

describe('<CommentInput />', () => {
  const commentInput = mount(
    <ThemeProvider theme={lightTheme}>
      <CommentInput />
    </ThemeProvider>,
  )
  it('Should load the CommentInput component', () => {
    expect(commentInput.length).toEqual(1)
  })
})
