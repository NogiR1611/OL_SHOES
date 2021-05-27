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
    name: 'content-category',
    pattern: '/categories/1',
    page: '/categories/contentCategory'
  })
  .add({
    name: 'content-product',
    pattern: '/products/1',
    page: '/products/contentProduct'
  })
  .add({
    name: 'waiting-pay-order',
    pattern: '/orders/1',
    page: '/orders/waitingPayOrder'
  })
  .add({
    name: 'order-rejected',
    pattern: '/orders/1/rejected',
    page: '/orders/rejectedOrder'
  })
  .add({
    name: 'terms-and-conditions',
    pattern: '/terms-and-conditions',
    page: '/termsAndConditions'
  })