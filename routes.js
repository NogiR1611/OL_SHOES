const routes = require('next-routes');

module.exports = routes().add({
  name: 'home',
  pattern: '/home',
  page: 'index'
});