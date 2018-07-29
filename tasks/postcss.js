module.exports = {
	 options: {
      map: true, // inline sourcemaps
      processors: [
        require('autoprefixer'), // add vendor prefixes
      ]
    },
    dist: {
      src: './build/css/main.css'
    }
}