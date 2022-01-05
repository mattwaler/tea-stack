const Twig = require('twig')

module.exports = (config) => {
  config.addTemplateFormats('twig')
  config.addExtension('twig', {
    compile: async function(inputContent, inputPath) {
      return async (data) => {
        const template = Twig.twig({
          allowInlineIncludes: true,
          data: inputContent,
          path: './src/_includes/',
        })
        return template.render(data)
      }
    }
  })
  config.addPassthroughCopy({ 'public': './' })
  config.setBrowserSyncConfig({
    files: ['dist/**/*'],
    open: true,
  })
  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
    markdownTemplateEngine: 'twig',
  }
}
