import { useState, useEffect } from 'react'
import styled from 'styled-components'
import fetch from 'node-fetch'
import Layout from '../components/Layout'
import PostItemList from '../components/PostItemList'
import UserData from '../components/UserData'

const Title = styled.h1`
  margin: 20px;
`

function ProfilePage({
  posts = {},
  id = null,
}) {
  const [userDataState, setUserDataState] = useState({})
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = window.localStorage.getItem('token') || ''
        const id = window.localStorage.getItem('id') || ''
        const resPost = await fetch(`https://api.callback-news.com/users/${id}`, {
          method: 'get',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': token ? `Token ${token || ''}` : '',
          },
        })
        const data = await resPost.json()
        console.log('fetchData -> data', data)
        setUserDataState(data)

      } catch (error) {
        console.log(error)
      }

    }
    fetchData()
  }, [null])

  const { results } = posts
  const favoriteNews = results ? [results[0], results[1], results[2]] : []
  const [title] = useState('Profile Data')
  return (
    <Layout title={title}>
      <Title>{title}</Title>
      <UserData data={userDataState} />
      <PostItemList title="My Favorite news" posts={favoriteNews} />
    </Layout>
  )
}

export async function getServerSideProps({ query, res }) {
  try {
    const [resPosts] = await Promise.all([
      fetch('https://api.callback-news.com/news/'),
      // fetch('https://storage.googleapis.com/cbn-public/mocks/data-json/news.json'),
    ])

    const posts = await resPosts.json()
    res.statusCode = 200
    return { props: { posts, statusCode: res.statusCode } }

  } catch (error) {
    res.statusCode = 503
    return { props: { statusCode: res.statusCode } }
  }

}

export default ProfilePage
