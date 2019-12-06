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
    entry: `${__dirname}/src/index.ts`,
    externals: [
      'color',
      'expo-blur',
      'expo-haptics',
      'expo-linear-gradient',
      'react',
      'react-native',
      'react-native-drag-drop-grid-library',
      'react-native-drag-sort',
      'react-native-touchable-scale',
      'react-native-vector-icons/Ionicons',
      'styled-components/native'
    ],
    devtool,
    output: {
      path: `${__dirname}/lib`,
      filename: outputFile,
      library: 'NativeColorPicker',
      libraryTarget: 'commonjs2'
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
          resolve: {
            extensions: ['.tsx', '.ts']
          }
        }
      ]
    }
  }
}
