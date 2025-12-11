import tailwindcss from "@tailwindcss/vite";


/** @type {import('vite').UserConfig} */
export default {
  plugins: [
    tailwindcss()
  ],
  publicDir: false,
	build: {
		outDir: './dist/assets',
		assetsDir: '',
		rollupOptions: {
			input: ['./src/_bundle/app.js', './src/_bundle/app.css'],
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`
      }
		},
	},
}
