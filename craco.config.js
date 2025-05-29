module.exports = {
  webpack: {
    configure: {
      resolve: {
        fallback: {
          "stream": require.resolve("stream-browserify"),
          "crypto": require.resolve("crypto-browserify"),
          "path": require.resolve("path-browserify"),
          "zlib": require.resolve("browserify-zlib"),
          "http": require.resolve("stream-http"),
          "https": require.resolve("https-browserify")
        }
      }
    }
  }
};