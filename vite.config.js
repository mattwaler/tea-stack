/** @type {import('vite').UserConfig} */
export default {
	build: {
		outDir: './dist/assets',
		assetsDir: '',
		rollupOptions: {
			input: ['./src/_scripts/_main.js', './src/_styles/_main.pcss'],
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`
      }
		},
	},
}
