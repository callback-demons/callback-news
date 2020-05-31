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
  // const handleSubmit = (event) => {
  //   event.preventDefault()
  //   console.log('Searching news...')
  // }
  return (
    <Layout title={`${router.query.name || 'Category'} | Callback News`}>
      <Title>{router.query.name || 'Category Not Found'}</Title>
      <SearchContainer>
        <SearchBar />
      </SearchContainer>
      <DottedLine />
      <PostItemList posts={posts} />
    </Layout>
  )
}

export async function getServerSideProps({ query, res }) {
  try {
    const [resPosts] = await Promise.all([
      fetch(`https://api.callback-news.com/categories/${query.id}/news/`),
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

export default CategoryPage
