import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Head from 'next/head'
import lightTheme from '../styled/themes/light'
import GlobalStyles from '../styled/globalStyles'

const Header = styled.header`
  color: #fff;
  background: #8756ca;
  padding: 15px;
  text-align: center;
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
      </Head>
      <Header>{title}</Header>
      {children}
    </ThemeProvider>
  )
}

export default Layout
