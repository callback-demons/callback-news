import { useState } from 'react'
import styled from 'styled-components'
import fetch from 'node-fetch'
import Layout from '../components/Layout'
import DottedLine from '../components/DottedLine'
import PostItemList from '../components/PostItemList'
import SearchBar from '../components/SearchBar'

const Title = styled.h1`
  margin: 20px;
  margin-bottom: 0px;
`

const SearchContainer = styled.div`
  width:80%;
  padding: 20px;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`

function CategoryPage({ posts = {} }) {
  const favoriteNews = posts ? [posts[0], posts[1], posts[3], posts[4], posts[18]] : []
  const [title] = useState('Robotic | Callback News')
  // const handleSubmit = (event) => {
  //   event.preventDefault()
  //   console.log('Searching news...')
  // }
  return (
    <Layout title={title}>
      <SearchContainer>
        <SearchBar />
      </SearchContainer>
      <Title>{title}</Title>
      <DottedLine />
      <PostItemList posts={favoriteNews} />
    </Layout>
  )
}

export async function getServerSideProps({ query, res }) {
  try {
    const [resPosts] = await Promise.all([
      fetch('https://storage.googleapis.com/cbn-public/mocks/data-json/news.json'),
    ])

    const posts = await resPosts.json()
    res.statusCode = 200
    return { props: { posts, statusCode: res.statusCode } }

  } catch (error) {
    res.statusCode = 503
    return { props: { statusCode: res.statusCode } }
  }

}

export default CategoryPage
