import { useState } from 'react'
import styled from 'styled-components'
import fetch from 'node-fetch'
import Layout from '../components/Layout'
import PostItemList from '../components/PostItemList'
import UserData from '../components/UserData'

const Title = styled.h1`
  margin: 20px;
`

function ProfilePage({ userData = {}, posts = {} }) {
  const { results } = posts
  const favoriteNews = results ? [results[0], results[1], results[2]] : []
  const [title] = useState('Profile Data')
  return (
    <Layout title={title}>
      <Title>{title}</Title>
      <UserData data={userData[0]} />
      <PostItemList title="My Favorite news" posts={favoriteNews} />
    </Layout>
  )
}

export async function getServerSideProps({ query, res }) {
  try {
    const [resUserData, resPosts] = await Promise.all([
      fetch('https://storage.googleapis.com/cbn-public/mocks/data-json/user.json'),
      fetch('https://api.callback-news.com/news/'),
      // fetch('https://storage.googleapis.com/cbn-public/mocks/data-json/news.json'),
    ])

    const userData = await resUserData.json()
    const posts = await resPosts.json()
    res.statusCode = 200
    return { props: { userData, posts, statusCode: res.statusCode } }

  } catch (error) {
    res.statusCode = 503
    return { props: { statusCode: res.statusCode } }
  }

}

export default ProfilePage
