var plugins = [{
      plugin: require('/Users/leyiqiang/Library/Mobile Documents/com~apple~CloudDocs/myprojects/nucssa-gatsby-blog/nucssa/node_modules/gatsby-plugin-google-analytics/gatsby-ssr.js'),
      options: {"plugins":[],"trackingId":"YOUR_GOOGLE_ANALYTICS_TRACKING_ID","head":false,"anonymize":true,"respectDNT":true},
    },{
      plugin: require('/Users/leyiqiang/Library/Mobile Documents/com~apple~CloudDocs/myprojects/nucssa-gatsby-blog/nucssa/node_modules/gatsby-remark-autolink-headers/gatsby-ssr.js'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/leyiqiang/Library/Mobile Documents/com~apple~CloudDocs/myprojects/nucssa-gatsby-blog/nucssa/node_modules/gatsby-plugin-manifest/gatsby-ssr.js'),
      options: {"plugins":[],"name":"Gatsby website","short_name":"Gatsby website","start_url":"/","background_color":"#f7f7f7","theme_color":"#191919","display":"minimal-ui"},
    },{
      plugin: require('/Users/leyiqiang/Library/Mobile Documents/com~apple~CloudDocs/myprojects/nucssa-gatsby-blog/nucssa/gatsby-ssr.tsx'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   require('/path/to/plugin1/gatsby-ssr.js'),
//   require('/path/to/plugin2/gatsby-ssr.js'),
// ]

const apis = require(`./api-ssr-docs`)

module.exports = (api, args, defaultReturn) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }
  // Run each plugin in series.
  let results = plugins.map(plugin => {
    if (plugin.plugin[api]) {
      const result = plugin.plugin[api](args, plugin.options)
      return result
    }
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
