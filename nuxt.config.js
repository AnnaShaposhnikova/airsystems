export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  env: {
    siteName: 'AirSystems',
  },

  generate: {
    fallback: true,
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'airsystems',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      {
        charset: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Poppins&display=swap',
      },
    ],
    // script: [
    //     {src: "https://www.google.com/recaptcha/api.js?render=6LfdhnogAAAAADFMYpEvpswVA38j68sZwRtB7Dmi"},
    // ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/static/css/style.css',
    '~/static/css/style_cards.css',
    '~/static/css/style_tables.css',
    '~/static/css/style_order_form.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxt/image'],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    [
      'nuxt-i18n',
      {
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: 'i18n_redirected',
          alwaysRedirect: false,
          fallbackLocale: 'ua',
        },
        locales: [
          {
            name: 'Ukrainian',
            code: 'ua',
            iso: 'ua',
            file: 'ua.js',
          },
          {
            name: 'Russian',
            code: 'ru',
            iso: 'ru',
            file: 'ru.js',
          },
        ],
        langDir: 'lang/',
        defaultLocale: 'ua',
        seo: true,
      },
    ],
  ],

  bootstrapVue: {
    bvCSS: false,
    components: [
      'BNavbar',
      'BNavbarNav',
      'BNavbarToggle',
      'BNavbarBrand',
      'BNavText',
      'BNavItemDropdown',
      'BNavItem',
      'BIconHouseDoorFill',
      'BButton',
      'BModal',
      'BForm',
      'BFormInput',
      'BFormTextarea',
      'BIconEnvelope',
      'BIconTelephone',
      'BCard',
      'BCardHeader',
      'BCardBody',
      'BCardText',
      'BCollapse',
      'BIconFacebook',
      'BIconInstagram',
      'BImg',
      'BCarousel',
      'BCarouselSlide',
      'BIconCheck',
    ],
    componentPlugins: ['ModalPlugin', 'NavbarPlugin'],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
