const routes = require('next-routes');

module.exports = routes()
  .add({
    name: 'home',
    pattern: '/',
    page: 'index'
  })
  .add({
    name: 'orders',
    pattern: '/orders',
    page: 'orders'
  })
  .add({
    name: 'messages',
    pattern: '/messages',
    page: 'messages'
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