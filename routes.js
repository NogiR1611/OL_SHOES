const routes = require('next-routes');

module.exports = routes()
  .add({
    name: 'home',
    pattern: '/home',
    page: 'index'
  })
  .add({
    name: 'users',
    pattern: '/users',
    page: 'users'
  })
  .add({
    name: 'about',
    pattern: '/about',
    page: 'about'
  })
  .add({
    name: 'categories',
    pattern: '/categories',
    page: 'categories'
  })
  .add({
    name: 'content-product',
    pattern: '/products/1',
    page: '/products/contentProduct'
  });