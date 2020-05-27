import React from 'react'
import ReactDOM from 'react-dom'
import { Catalog, pageLoader } from 'catalog'

// import TestComponent from './components/TestComponent'

const pages = [
  {
    imports: {
      // Avatar: require('../../components/Avatar'),
      // Layout: require('../../components/Layout'),
      Header: require('./components/Header.mock'),
    },
    path: '/',
    title: 'Welcome',
    content: pageLoader(() => import('./WELCOME.md')),
  },
  // {
  //   imports: { Layout: import('../../components/Header') },
  //   path: '/header',
  //   title: 'Header',
  //   content: pageLoader(() => import('./components/Header.md')),
  // },
  // {
  //   title: 'Design',
  //   path: '/components',
  //   pages: [
  //     {
  //       path: 'layout',
  //       title: '<Layout />',
  //       content: pageLoader(() => import('./components/Avatar.js')),
  //     },

  //   ],
  // },
]

ReactDOM.render(
  <Catalog title="Catalog" pages={pages} />,
  document.getElementById('catalog'),
)
