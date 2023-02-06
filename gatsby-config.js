/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    siteMetadata: {
        title: `cookies-app`,
        siteUrl: `https://www.yourdomain.tld`
    },
    plugins: [
        "gatsby-plugin-sass",
        "gatsby-plugin-sharp",
        "gatsby-plugin-image",
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: `${__dirname}/src/assets/images`
            }
        },
        {
            resolve: "gatsby-omni-font-loader",
            options: {
                enableListener: true,
                preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
                web: [
                    {
                        name: `Raleway`,
                        file: `https://fonts.googleapis.com/css2?family=Raleway:wght@400;600&display=swap`,
                    },
                ],
            },
        }]
};