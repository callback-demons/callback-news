const routes = require('next-routes')

module.exports = routes()
  .add('index')
  .add('post', '/post/:id', 'post')
  .add('category', '/category/:id', 'category')
  // .add('podcast', '/:slugChannel.:idChannel/:slug.:id', 'podcast')

// .add('user', '/user/:id', 'profile')
// .add('/:noname/:lang(en|es)/:wow+', 'complex')
// .add({name: 'beta', pattern: '/v3', page: 'v3'})
