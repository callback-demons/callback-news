import React from 'react'
import { shallow } from 'enzyme'
import { ThemeProvider } from 'styled-components'
import ClientPortal from '../../components/ClientPortal'
import Layout from '../../components/Layout'
import lightTheme from '../../styled/themes/light'

describe('<ClientPortal />', () => {
  const clientPortal = shallow(
    <ThemeProvider theme={lightTheme}>
      <ClientPortal />
    </ThemeProvider>,
  )

  it('Should load the ClientPortal component', () => {
    // ReactDOM.createPortal = jest.fn((modal) => modal)

    expect(clientPortal.length).toEqual(1)
  })
})
