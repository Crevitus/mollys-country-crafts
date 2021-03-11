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
        `gatsby-plugin-material-ui`,
        'gatsby-plugin-sass',
    ],
    siteMetadata: {
        title: 'Molly\'s Country Crafts',
        titleTemplate: '%s · Waldorf inspired crafts',
        description: 'Hand painted local stones and Waldorf inspired crafts.',
        url: 'https://mollyscountrycrafts.co.uk', // No trailing slash allowed!
        image: '/static/logo-ac113b1d00554e1f6932c7b4f13e585e.svg', // Path to your image you placed in the 'static' folder
        twitterUsername: '',
        faviconUrl: 'img/favicon.ico',
    },
};
