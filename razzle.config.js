const path = require('path')

module.exports = {
    modifyWebpackConfig: (opts) => {
      const cfg = opts.webpackConfig
  
      cfg.resolve.alias = {
          'app': path.resolve(__dirname, 'src/app'),
      }
  
      return cfg;
    }
};
