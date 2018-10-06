// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-post-jsx": preferDefault(require("/Users/leyiqiang/Library/Mobile Documents/com~apple~CloudDocs/myprojects/nucssa-gatsby-blog/nucssa/src/templates/post.jsx")),
  "component---src-templates-tag-jsx": preferDefault(require("/Users/leyiqiang/Library/Mobile Documents/com~apple~CloudDocs/myprojects/nucssa-gatsby-blog/nucssa/src/templates/tag.jsx")),
  "component---src-templates-category-jsx": preferDefault(require("/Users/leyiqiang/Library/Mobile Documents/com~apple~CloudDocs/myprojects/nucssa-gatsby-blog/nucssa/src/templates/category.jsx")),
  "component---cache-dev-404-page-js": preferDefault(require("/Users/leyiqiang/Library/Mobile Documents/com~apple~CloudDocs/myprojects/nucssa-gatsby-blog/nucssa/.cache/dev-404-page.js")),
  "component---src-pages-about-jsx": preferDefault(require("/Users/leyiqiang/Library/Mobile Documents/com~apple~CloudDocs/myprojects/nucssa-gatsby-blog/nucssa/src/pages/about.jsx")),
  "component---src-pages-index-jsx": preferDefault(require("/Users/leyiqiang/Library/Mobile Documents/com~apple~CloudDocs/myprojects/nucssa-gatsby-blog/nucssa/src/pages/index.jsx"))
}

