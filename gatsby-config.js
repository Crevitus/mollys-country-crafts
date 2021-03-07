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
        image: '/static/logo-0cc123645c3a3d0b774a2d70761cdb3b.jpg', // Path to your image you placed in the 'static' folder
        twitterUsername: '',
        faviconUrl: 'img/favicon.ico',
    },
};
