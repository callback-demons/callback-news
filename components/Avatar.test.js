import React from 'react'
import { mount } from 'enzyme'
import Avatar from './Avatar'

describe('<Avatar />', () => {
  it('Should load the avatar component', () => {
    const footer = mount(<Avatar />)
    expect(footer.length).toEqual(1)
  })
})
