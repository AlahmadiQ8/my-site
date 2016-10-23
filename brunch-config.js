// See http://brunch.io for documentation.
module.exports = {
  
  files: {
    javascripts: {joinTo: {
      'app.js': /^app/, // all code from 'app/',
      'vendor.js': /^(?!app)/ // all BUT app code - 'vendor/', 'node_modules/', etc
    }},
    stylesheets: {joinTo: 'styles/app.css'},
    templates:   { joinTo: 'main.js'  },
  },

  plugins: {
    sass: {
      options: {
        includePaths: ["node_modules/susy/sass", 
                     "node_modules/breakpoint-sass/stylesheets", 
                     "node_modules/hover.css/css"], // tell sass-brunch where to look for files to @import
      }
    }
  },

};


