module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'samgoddard | web developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  loading: { color: '#3B8070' },

  build: {
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      vendor: ['vue-particles']
    }
  },

  plugins: [
    { src: '~plugins/vue-particles.js', ssr: false }
  ],

  css: [
    // CSS file in the project
    '~/assets/main.scss'
  ]
}
