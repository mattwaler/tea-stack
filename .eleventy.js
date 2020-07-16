module.exports = (config) => {
  config.addPassthroughCopy({ 'src/assets': 'assets' })
  config.setBrowserSyncConfig({
    files: ['dist/**/*'],
    open: true,
    // Fix for Turbolinks & Browserstack
    snippetOptions: {
      rule: {
        match: /<\/head>/i,
        fn: function (snippet, match) {
          return snippet + match;
        }
      }
    }
  })
  config.setDataDeepMerge(true)

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
  }
}
