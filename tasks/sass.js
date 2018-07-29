const nodesass = require('node-sass');
module.exports = {
    options: {
        implementation: nodesass,
        sourceMap: true,
        outputStyle:"nested"
    },
    dist: {
        files: {
            './build/css/main.css': './sass/main.scss'
        }
    }
}