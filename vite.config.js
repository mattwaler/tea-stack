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
			input: ['./src/_scripts/_main.js', './src/_styles/_main.css'],
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`
      }
		},
	},
}
