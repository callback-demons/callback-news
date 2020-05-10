import Head from 'next/head'
import styled from 'styled-components'
import PostItemList from '../components/PostItemList'
import Layout from '../components/Layout'

const Logo = styled.img`
  max-width:100%;
`

function HomePage() {
  return (
    <Layout>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <Logo src="/callback-news-logo.png" alt="Callback News Logo" />
      <PostItemList />
    </Layout>
  )
}

export default HomePage
