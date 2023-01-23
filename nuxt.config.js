export default defineNuxtConfig({
  app: {
    head: {
      title: 'Cifra',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/public/favicon.ico' },
      ]
    },
  },
  css: [
      'vuetify/lib/styles/main.sass',
  ],
  build: {
    transpile: ['vuetify'],
  },
  vite: {
      define: {
        'process.env.DEBUG': false,
      },
      ssr: {
        noExternal: ['vuetify'],
      },
  },
  modules: [
    ['@pinia/nuxt',
      {
        autoImports: ['defineStore', 'acceptHMRUpdate'],
      }
    ],
    '@vueuse/nuxt',
    'nuxt-socket-io',
  ],
  io: {     
    sockets: [{
      name: 'main',
      url: 'http://localhost:4000',
      default: true,
    }]
  },
  imports: {
    dirs: ['stores'],
  },
  
})