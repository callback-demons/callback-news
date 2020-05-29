import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Head from 'next/head'
import lightTheme from '../styled/themes/light'
import GlobalStyles from '../styled/globalStyles'
import Header from './Header'
import Footer from './Footer'

const Main = styled.main`
  display:block;
  padding-top:60px;
`

const Layout = ({ title, children }) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;400;600;900&display=swap" rel="stylesheet" />
        <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
        <link rel="icon" type="image/svg+xml" href="https://storage.cloud.google.com/cbn-public/favicon.svg" sizes="any" />

      </Head>
      <Header />
      <Main>
        {children}
      </Main>
      <Footer />
    </ThemeProvider>
  )
}

export default Layout
