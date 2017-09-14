const config = require('./config/config.js');

module.exports = {
  content: {
    page: '/_page',
    permalink: ':slug',
    isPost: false,
    generate: ['get', 'getAll']
  },

  api: {
    baseURL: process.env.NODE_ENV === 'production'
      ? config.productionUrl
      : config.developmentUrl
  }
}
