module.exports = {
  content: {
    permalink: ':slug',
    isPost: false,
    generate: ['get']
  },

  api: {
    baseURL: 'http://localhost:3000'
  }
}
