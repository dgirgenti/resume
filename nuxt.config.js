import seo from './assets/seo';

export default {
    mode: 'spa',
    /*
  ** Headers of the page
  */
    head: {
        title: `${seo.title} - ${seo.shortDesc}`,
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            {
                hid: 'description',
                name: 'description',
                content: seo.description,
            },
            {
                hid: 'og:type',
                property: 'og:type',
                content: 'website',
            },
            {
                hid: 'og:title',
                property: 'og:title',
                content: `${seo.title} - ${seo.shortDesc}`,
            },
            {
                hid: 'og:locale',
                property: 'og:locale',
                content: 'en-US',
            },
            {
                hid: 'og:site_name',
                property: 'og:site_name',
                content: seo.title,
            },
            {
                hid: 'og:site_name',
                property: 'og:site_name',
                content: seo.title,
            },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css?family=Lato',
            },
        ],
        htmlAttrs: {
            lang: 'en',
        },
    },
    /*
  ** Customize the progress-bar color
  */
    loading: false,
    /*
  ** Global CSS
  */
    css: [
        '~/css/main.scss',
    ],
    /*
  ** Plugins to load before mounting the App
  */
    plugins: [
    ],
    /*
  ** Nuxt.js dev-modules
  */
    buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
        '@nuxtjs/eslint-module',
        // Doc: https://github.com/nuxt-community/stylelint-module
        '@nuxtjs/stylelint-module',

        '@nuxtjs/google-analytics',
    ],
    /*
  ** Nuxt.js modules
  */
    modules: [
    ],
    /*
  ** Build configuration
  */
    build: {
    /*
    ** You can extend webpack config here
    */
        extend(/* config, ctx */) {
        },
    },
    googleAnalytics: {
        id: 'UA-61305405-2',
    },
};
