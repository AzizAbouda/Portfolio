module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.devtool = false;

      // Add fallback for Node.js core modules (Webpack 5)
      webpackConfig.resolve = {
        ...webpackConfig.resolve,
        fallback: {
          ...(webpackConfig.resolve?.fallback || {}), // Preserve existing fallbacks
          "path": require.resolve("path-browserify"),
          "fs": false, // or require.resolve("browserify-fs") if needed
          "crypto": require.resolve("crypto-browserify"),
          "stream": require.resolve("stream-browserify"),
          "http": require.resolve("stream-http"),
          "https": require.resolve("https-browserify"),
          "zlib": require.resolve("browserify-zlib"),
          // Add other necessary polyfills
        },
      };

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

      return webpackConfig;
    }
  },
};