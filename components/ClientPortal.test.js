import React from 'react'
import { shallow } from 'enzyme'
import ClientPortal from './ClientPortal'
import Layout from './Layout'

describe('<ClientPortal />', () => {
  const clientPortal = shallow(
    <Layout>
      <ClientPortal />
    </Layout>,
  )

  it('Should load the ClientPortal component', () => {
    // ReactDOM.createPortal = jest.fn((modal) => modal)

    expect(clientPortal.length).toEqual(1)
  })
})
