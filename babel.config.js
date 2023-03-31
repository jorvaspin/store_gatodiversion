module.exports = {
    presets: [
      '@babel/preset-env',
      '@babel/preset-typescript',
      '@babel/preset-react'
    ],
    plugins: [
      ["@babel/plugin-proposal-private-property-in-object", { "loose": true }],
      ["@babel/plugin-proposal-private-methods", { "loose": true }],
      ['@babel/plugin-transform-typescript', { allowDeclareFields: true }],
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      ['@babel/plugin-proposal-class-properties', { loose: true }],
      '@babel/plugin-transform-runtime',
      '@vue/babel-plugin-jsx',
    ],
  }
