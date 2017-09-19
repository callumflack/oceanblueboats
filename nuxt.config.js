module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'For far-away places',
    titleTemplate: '%s | Oceanblue Boats, Cairns',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'google-site-verification', content: 'PAZ08G7lraH_fgi9VL18z9BXxutB1DGu20JapK90KDQ' },
      { hid: 'description', name: 'description', content: 'Oceanblue Boats builds custom plate aluminium boats for the serious fisherman from Cairns, Australia.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#0b3059' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  css: [
    '~/assets/suit.css',
    '~/assets/base.css'
  ],
  plugins: [
    { src: '~/plugins/vue-pure-lightbox', ssr: false }
  ],
  modules: [
    'nuxtent'
  ],
  axios: {
    credentials: false
  },
  router: {
    middleware: 'currentPage',
    async scrollBehavior (to, from, savedPosition) {
      setTimeout(() => {
        // Pages using the _page.vue file share a savedPosition as they
        // are all the same page to nuxt
        // This is undesired so to scoll to top instead

        if (to.matched[0] && to.matched[0].name === 'page') {
          return window.scrollTo(0, 0)
        }

        const scrollTo = Object.assign({
          x: 0,
          y: 0
        }, savedPosition)

        window.scrollTo(scrollTo.x, scrollTo.y)
      }, 400)
    }
  },
  generate: {
    routes: [
      '/',
      '/the-history',
      '/the-factory',
      '/the-process',
      '/the-boat-builders',
      '/the-designs',
      '/contact-us'
    ]
  }
}
