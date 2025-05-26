module.exports = {
  webpack: {
    configure: {
      devtool: false,
      ignoreWarnings: [
        {
          module: /@mediapipe/,
        },
        {
          module: /three-mesh-bvh/,
        }
      ],
      resolve: {
        fallback: {
          'path': false,
          'fs': false,
          'crypto': false
        }
      }
    },
  },
}; 