module.exports = {
  env: {
    development: {
      presets: [
        ['@babel/preset-env', { targets: { node: 'current' } }],
        '@babel/preset-typescript',
        '@babel/preset-react',
        'next/babel',
      ],
      plugins: [['styled-components', { ssr: true }]],
    },
    production: {
      presets: [
        ['@babel/preset-env', { targets: { node: 'current' } }],
        '@babel/preset-typescript',
        '@babel/preset-react',
        'next/babel',
      ],
      plugins: [['styled-components', { ssr: true }]],
    },
    test: {
      presets: [
        ['@babel/preset-env', { targets: { node: 'current' } }],
        '@babel/preset-typescript',
        '@babel/preset-react',
      ],
    },
  },
};

//    "test": "NODE_ENV=test jest",
//    "test:watch": "NODE_ENV=test jest --watch"

// "jest": {
//   "setupFilesAfterEnv": [
//     "<rootDir>/setupTests.js"
//   ]
// }
