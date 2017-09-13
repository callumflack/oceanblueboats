module.exports = {
  content: {
    permalink: ':slug',
    isPost: false,
    generate: ['get']
  },

  api: {
    baseURL: process.env.NODE_ENV === 'production'
      ? 'https://oceanblueboats.now.sh'
      : 'http://localhost:3000'
  }
}
