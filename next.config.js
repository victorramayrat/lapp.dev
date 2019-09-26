const withCSS = require('@zeit/next-css')
module.exports = withCSS({
  /* config options here */
})
module.exports = {
  exportPathMap: async function(
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' }
    }
  },
}
