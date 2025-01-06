import twig from '@factorial/eleventy-plugin-twig'

const twigOptions = {
  twig: {
    namespaces: {},
  },
  images: {},
  dir: {
    input: "src",
    output: "dist",
    watch: "src/**/*.{css,js,twig}",
  },
};

export default function (config) {
  config.addPassthroughCopy({ 'public': './' })
  config.addPlugin(twig, twigOptions)
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
