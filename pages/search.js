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

function SearchPage({ posts = [] }) {
  const router = useRouter()
  // const handleSubmit = (event) => {
  //   event.preventDefault()
  //   console.log('Searching news...')
  // }
  return (
    <Layout title={`${router.query.title || 'Category'} | Callback News`}>
      <Title>{`Searching: ${router.query.title}` || 'No query search provided'}</Title>
      <SearchContainer>
        <SearchBar />
      </SearchContainer>
      <DottedLine />
      <PostItemList posts={posts} />
    </Layout>
  )
}

export async function getServerSideProps({ query, res }) {
  const { title } = query
  console.log(title)
  try {
    const resPosts = await fetch('https://api.callback-news.com/news/?title=This')
    const data = await resPosts.json()
    const posts = data.results
    console.log('posts')
    console.log(posts)
    res.statusCode = 200
    return { props: { posts, statusCode: res.statusCode } }

  } catch (error) {
    res.statusCode = 503
    console.log(error)
    return { props: { statusCode: res.statusCode } }
  }

}

export default SearchPage
