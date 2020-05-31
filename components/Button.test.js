import React from 'react'
import { mount } from 'enzyme'
import Button from './Button'

describe('<Button />', () => {
  it('Should load the Button component', () => {
    const button = mount(<Button />)
    expect(button.length).toEqual(1)
  })
})
