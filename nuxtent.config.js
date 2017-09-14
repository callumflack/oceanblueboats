module.exports = {
  content: {
    page: '/_page',
    permalink: ':slug',
    isPost: false,
    generate: ['get', 'getAll']
  },

  api: {
    baseURL: process.env.NODE_ENV === 'production'
      ? 'https://oceanblueboats.now.sh'
      : 'http://localhost:3000'
  }
}
