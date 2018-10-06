var plugins = [{
      plugin: require('/Users/leyiqiang/Library/Mobile Documents/com~apple~CloudDocs/myprojects/nucssa-gatsby-blog/nucssa/node_modules/gatsby-plugin-google-analytics/gatsby-browser.js'),
      options: {"plugins":[],"trackingId":"YOUR_GOOGLE_ANALYTICS_TRACKING_ID","head":false,"anonymize":true,"respectDNT":true},
    },{
      plugin: require('/Users/leyiqiang/Library/Mobile Documents/com~apple~CloudDocs/myprojects/nucssa-gatsby-blog/nucssa/node_modules/gatsby-remark-autolink-headers/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/leyiqiang/Library/Mobile Documents/com~apple~CloudDocs/myprojects/nucssa-gatsby-blog/nucssa/node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/leyiqiang/Library/Mobile Documents/com~apple~CloudDocs/myprojects/nucssa-gatsby-blog/nucssa/gatsby-browser.tsx'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks
// basically like:
// var plugins = [
//   require('/path/to/plugin1/gatsby-browser.js'),
//   require('/path/to/plugin2/gatsby-browser.js'),
// ]

export function apiRunner(api, args, defaultReturn) {
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
  } else if (defaultReturn) {
    return [defaultReturn]
  } else {
    return []
  }
}

export function apiRunnerAsync(api, args, defaultReturn) {
  return plugins.reduce(
    (previous, next) =>
      next.plugin[api]
        ? previous.then(() => next.plugin[api](args, next.options))
        : previous,
    Promise.resolve()
  )
}
