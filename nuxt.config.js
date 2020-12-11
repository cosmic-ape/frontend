import dotenv from "dotenv";
dotenv.config();
const contentful = require("contentful");
const client = contentful.createClient({
 space: process.env.CONTENTFUL_SPACE,
 accessToken: process.env.CONTENTFUL_ACCESSTOKEN
}); 
export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: "universal",
  target: "static",
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */

  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: 'Alex Dukkee',
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      //{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap rel="stylesheet'
      }
    ]
  },
  /*
   ** Global CSS
   */ css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  loading: '~/components/loading.vue',
  plugins: [
    "~/plugins/contentful",
    "~/plugins/collections"
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,

  env: {
    CONTENTFUL_SPACE: process.env.CONTENTFUL_SPACE,
    CONTENTFUL_ACCESSTOKEN: process.env.CONTENTFUL_ACCESSTOKEN
  },
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["nuxt-gsap", "@nuxtjs/dotenv"],
  nuxtGsap: {
    imports: ["ScrollTrigger" ,"ScrollToPlugin"] // Specify the gsap modules you want to import. By default, gsap & Linear are loaded
  },
  /*
   ** Nuxt.js modules
   */
  modules: [[
    'nuxt-mq',
    {
      // Default breakpoint for SSR
      breakpoints: {

        nav: 1024,
        lg: Infinity
      }
    }
  ]],
  
  generate: {
    routes() {
      return Promise.all([
        client.getEntries({
          content_type: "collections"
        })
      ]).then(([collections]) => {
        return [...collections.items.map(entry =>  '/collections/' + entry.fields.slug)];
      });
    },
    fallback: '404.html' 
  }
};
