module.exports = env => {
  const libraryName = 'native-color-cards'

  let outputFile, mode, devtool

  if (env === 'build') {
    mode = 'production'
    outputFile = `${libraryName}.min.js`
    devtool = false
  } else {
    mode = 'development'
    outputFile = `${libraryName}.js`
    devtool = 'source-map'
  }

  return {
    mode,
    entry: `${__dirname}/src/index.tsx`,
    externals: [
      'color',
      'expo',
      '@expo/vector-icons',
      'react',
      'react-native',
      'react-native-touchable-scale',
      'styled-components/native',
    ],
    devtool,
    output: {
      path: `${__dirname}/lib`,
      filename: outputFile,
      library: 'NativeColorPicker',
      libraryTarget: 'commonjs2',
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
          resolve: {
            extensions: ['.tsx'],
          },
        },
      ],
    },
  }
}
