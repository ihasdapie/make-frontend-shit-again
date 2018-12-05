module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: "Make Frontend Shit Again",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Make Frontend Shit Again"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: "#3B8070" },
  modules: [
    // Simple usage
    [
      "@nuxtjs/google-analytics",
      {
        id: "UA-37411302-8"
      }
    ]
  ],
  router: {
    middleware: "i18n"
  },
  plugins: ["~/plugins/i18n.js"],
  generate: {
    routes: ["/", "/jp"]
  },
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {}
  }
}
