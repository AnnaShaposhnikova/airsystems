export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'airsystems',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: ''}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
            {rel: 'preconnect', href: 'https://fonts.gstatic.com'},
            {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins&display=swap'},
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '~/static/css/style.css',
        '~/static/css/style_cards.css',
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/bootstrap
        'bootstrap-vue/nuxt',
    ],

    bootstrapVue: {
        icons: true
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {}
}
