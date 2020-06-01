import styled from 'styled-components'
import { useState, useEffect } from 'react'
import fetch from 'node-fetch'
import PostItemList from '../components/PostItemList'
import Layout from '../components/Layout'
import Hero from '../components/carousel/Hero'
import CategoryItemList from '../components/CategoryItemList'

const Title = styled.h1`
  display:none;
  margin: 20px;
  @media screen and (min-width:720px) {
    display:block;
  }
`

function HomePage({
  categories,
  posts,
}) {

  const [postsState, setPostsState] = useState({ ...posts } || {})
  useEffect(() => {
    const fetchData = async () => {
      const token = window.localStorage.getItem('token') || ''
      console.log('token', token)
      const resPosts = await fetch('https://api.callback-news.com/news/', {
        method: 'get',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Token ${token || ''}`,
        },
      })
      const data = await resPosts.json()
      setPostsState(data)
      console.log(data)
    }
    fetchData()
  }, [null])

  const { results } = postsState
  const heroNews = results ? [results[1], results[2], results[3]] : []
  const [title] = useState('Callback News - The daily technology newsletter')
  return (
    <Layout title={title}>
      <Hero posts={heroNews} />
      <Title>{title}</Title>
      <CategoryItemList data={categories} />
      <PostItemList title="Recent news" posts={results} />
      <PostItemList title="Popular news" posts={results} />
    </Layout>
  )
}

export async function getServerSideProps({ query, res }) {

  try {
    const [resCategories, resPosts] = await Promise.all([
      fetch('https://api.callback-news.com/categories/'),
      fetch('https://api.callback-news.com/news/'),
    ])

    const categories = await resCategories.json()
    const posts = await resPosts.json()
    res.statusCode = 200
    return { props: { categories, posts, statusCode: res.statusCode } }

  } catch (error) {
    res.statusCode = 503
    return { props: { statusCode: res.statusCode } }
  }

}

export default HomePage
