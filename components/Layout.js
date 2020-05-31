import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Head from 'next/head'
import lightTheme from '../styled/themes/light'
import GlobalStyles from '../styled/globalStyles'
import Header from './Header'
import Footer from './Footer'
import UserContext from '../utils/UserContext'

const Main = styled.main`
  display:block;
  padding-top:60px;
  min-height: calc(100vh - 130px);
  width:100%;
  margin-bottom: ${(props) => props.theme.space * 2}px;
`

const Container = styled.div`
  min-height:100vh;
`

const Layout = ({ title, children }) => {
  const [state, setState] = useState({ email: 'david@123.com', token: null })
  return (
    <ThemeProvider theme={lightTheme}>
      <UserContext.Provider value={[state, setState]}>
        <GlobalStyles />
        <Head>
          <title>{title}</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@500;600;700&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;400;600;900&display=swap" rel="stylesheet" />
          <link rel="icon" type="image/svg+xml" href="https://storage.cloud.google.com/cbn-public/favicon.svg" sizes="any" />

        </Head>
        <Container>
          <Header />
          <Main>
            {children}
          </Main>
          <Footer />
        </Container>
      </UserContext.Provider>
    </ThemeProvider>
  )
}

export default Layout
