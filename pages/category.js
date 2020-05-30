import { useState } from 'react'
import styled from 'styled-components'
import fetch from 'node-fetch'
import Layout from '../components/Layout'
import DottedLine from '../components/DottedLine'
import LabelInput from '../components/LabelInput'
import PostItemList from '../components/PostItemList'

const Title = styled.h1`
  margin: 20px;
  margin-bottom: 0px;
`

const Form = styled.form`
  width: 70%;
  padding: 0px;
  display: grid;
  align-items: end;
  margin-top: 20px;
  margin-left: 20px;
  grid-gap: 20px 40px;
  grid-template-columns: 1fr;
  justify-items: center;
  @media  screen and (min-width: 768px) {
    justify-items: right;
    justify-self: flex-start;
  }
`

function CategoryPage({ posts = {} }) {
  const favoriteNews = posts ? [posts[0], posts[1], posts[3], posts[4], posts[18]] : []
  const [title] = useState('Robotic')
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Searching news...')
  }
  return (
    <Layout title={title}>
      <Form onSubmit={handleSubmit}>
        <LabelInput
          label="Search news"
        />
      </Form>
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
