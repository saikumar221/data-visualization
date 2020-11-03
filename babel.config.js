module.exports = {
    presets: [['@babel/preset-env', {targets: {node: '10'}}], '@babel/preset-react'],
    plugins: [
      '@babel/plugin-syntax-dynamic-import',
      '@babel/plugin-proposal-class-properties'
  ]
  };