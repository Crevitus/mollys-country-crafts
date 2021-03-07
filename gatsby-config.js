module.exports = {
  plugins: [{
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'images',
      path: `${__dirname}/src/static/img/`,
    },
  },
  'gatsby-plugin-react-helmet',
  'gatsby-transformer-sharp',
  'gatsby-plugin-sharp',
  'gatsby-plugin-sass',
  ],
  siteMetadata: {
    title: 'Hello Hydro',
    titleTemplate: '%s · the home of hydroponics',
    description:
            'the home of hydroponics.',
    url: 'https://hellohydro.co.uk', // No trailing slash allowed!
    image: '/static/img/hello-hydro.png', // Path to your image you placed in the 'static' folder
    twitterUsername: '@HelloHydroHome',
    faviconUrl: '/static/img/favicon.ico',
  },
};
