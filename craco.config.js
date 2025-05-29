module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // 1. Update resolve.fallback (modern syntax)
      webpackConfig.resolve.fallback = {
        ...(webpackConfig.resolve.fallback || {}), // Preserve existing fallbacks
        "stream": require.resolve("stream-browserify"),
        "crypto": require.resolve("crypto-browserify"),
        "path": require.resolve("path-browserify"),
        "zlib": require.resolve("browserify-zlib"),
        "http": require.resolve("stream-http"),
        "https": require.resolve("https-browserify")
      };

      // 2. Replace ignoreWarnings with modern equivalent
      webpackConfig.ignoreWarnings = [
        { 
          module: /node_modules/, 
          message: /Failed to parse source map/ 
        }
      ];

      return webpackConfig;
    }
  }
};