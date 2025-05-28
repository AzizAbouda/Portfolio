module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.devtool = false;
      webpackConfig.module = webpackConfig.module || {};
      webpackConfig.module.rules = webpackConfig.module.rules || [];
      
      // Add ignore warnings through plugins
      webpackConfig.plugins = webpackConfig.plugins || [];
      webpackConfig.plugins.push({
        apply: (compiler) => {
          compiler.hooks.done.tap('IgnoreWarnings', (stats) => {
            if (stats.compilation.warnings) {
              stats.compilation.warnings = stats.compilation.warnings.filter(warning => {
                return !(/@mediapipe/.test(warning.message) || /three-mesh-bvh/.test(warning.message));
              });
            }
          });
        }
      });

      // Configure resolve fallbacks
      webpackConfig.resolve = webpackConfig.resolve || {};
      webpackConfig.resolve.alias = webpackConfig.resolve.alias || {};
      webpackConfig.resolve.alias.path = false;
      webpackConfig.resolve.alias.fs = false;
      webpackConfig.resolve.alias.crypto = false;

      return webpackConfig;
    }
  },
}; 