import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import fetch from 'node-fetch'
import Layout from '../components/Layout'
import DottedLine from '../components/DottedLine'
import PostItemList from '../components/PostItemList'
import SearchBar from '../components/SearchBar'

const Title = styled.h1`
  padding-top: 0px;
  margin: 20px 20px;
  /* margin-bottom: 0px; */
  @media screen and (min-width: 768px) {
    margin: 16px 20px;
    width: 50%;
  }
`

const SearchContainer = styled.div`
  width:80%;
  padding: 20px;
  padding-top: 0px;
  /* padding-top: ${(p) => p.theme.space * 3}px; */
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`

function CategoryPage({ posts = [] }) {
  const router = useRouter()
  const [postsState, setPostsState] = useState(posts)
  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const token = window.localStorage.getItem('token') || ''
        const resPosts = await fetch(`https://api.callback-news.com/categories/${router.query.id}/news/`, {
          method: 'get',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': token ? `Token ${token || ''}` : '',
          },
        })
        const postData = await resPosts.json()
        setPostsState(postData)
      } catch (error) {
        console.log(error)
      }
    }
    fetchPostData()
  }, [null])

  return (
    <Layout title={`${router.query.name || 'Category'} | Callback News`}>
      <Title>{router.query.name || 'Category Not Found'}</Title>
      <SearchContainer>
        <SearchBar />
      </SearchContainer>
      <DottedLine />
      <PostItemList posts={postsState} />
    </Layout>
  )
}

export async function getServerSideProps({ query, res }) {
  try {
    const [resPosts] = await Promise.all([
      fetch(`https://api.callback-news.com/categories/${query.id}/news/`),
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
