import Head from 'next/head'
import styled from 'styled-components'
import Layout from '../components/Layout'
import mockRSS from '../utils/mocks/rss.json'
import PostItem from '../components/PostItem'

const posts = mockRSS.rss.channel.item

const PostItemGrid = styled.div`
  display:grid;
  grid-template-columns:repeat(${(props) => props.qty || 1},1fr);
  grid-gap:${(props) => props.theme.spacing};
  width:100%;
`

const Logo = styled.img`
  max-width:100%;
`

const Hero = styled.div`
  display:grid;
  grid-template-columns:70% 1fr;
`

function HomePage() {
  return (
    <Layout>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <Logo src="/callback-news-logo.png" alt="Callback News Logo" />
      <h1>Main Posts</h1>
      <PostItemGrid qty={1}>
        {
          [1].map((index) => (
            <PostItem post={posts[index]} />
          ))
        }
      </PostItemGrid>
      <Hero>
        <PostItem post={posts[3]} />
        <PostItemGrid qty={1}>
          {
            [3].map((index) => (
              <PostItem post={posts[index]} />
            ))
          }
        </PostItemGrid>
      </Hero>
      <h2>Latest uploaded</h2>
      <PostItemGrid qty={3}>
        {
          [0, 1, 2, 12, 13, 14].map((index) => (
            <PostItem post={posts[index]} />
          ))
        }
      </PostItemGrid>
      <h2>For watching</h2>
      <PostItemGrid qty={2}>
        {
          [6, 7].map((index) => (
            <PostItem post={posts[index]} />
          ))
        }
      </PostItemGrid>
      <h2>Good old ways</h2>
      <PostItemGrid qty={4}>
        {
          [8, 9, 10, 11].map((index) => (
            <PostItem post={posts[index]} />
          ))
        }
      </PostItemGrid>
    </Layout>
  )
}

export default HomePage
