module.exports = {
  head: {
    title: 'ham-bird',
  },
  modules: ['@nuxtjs/axios'],
  buildModules: ['@nuxtjs/vuetify'],
  build: {
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
  },
};
