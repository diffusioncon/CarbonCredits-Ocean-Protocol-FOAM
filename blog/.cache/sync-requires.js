const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-tags-jsx": hot(preferDefault(require("/home/denham/Desktop/projects/Team-9/blog/src/pages/tags.jsx"))),
  "component---src-templates-tag-jsx": hot(preferDefault(require("/home/denham/Desktop/projects/Team-9/blog/src/templates/tag.jsx"))),
  "component---src-templates-post-jsx": hot(preferDefault(require("/home/denham/Desktop/projects/Team-9/blog/src/templates/post.jsx"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/denham/Desktop/projects/Team-9/blog/.cache/dev-404-page.js"))),
  "component---src-pages-404-jsx": hot(preferDefault(require("/home/denham/Desktop/projects/Team-9/blog/src/pages/404.jsx"))),
  "component---src-pages-blog-jsx": hot(preferDefault(require("/home/denham/Desktop/projects/Team-9/blog/src/pages/blog.jsx"))),
  "component---src-pages-index-jsx": hot(preferDefault(require("/home/denham/Desktop/projects/Team-9/blog/src/pages/index.jsx")))
}

