module.exports =  function(api) {
  api.cache(true);
  return {
  presets: ['babel-preset-expo'],
  plugins: [
    ['module:react-native-dotenv', { moduleName: '@env', allowUndefined: true }],
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.jsx',
          '.js',
          '.json',
          '.ios.js',
          '.android.js'
        ],
        alias: {
          '@api': './src/api',
          '@components': './src/components',
          '@screens': './src/screens',
          '@utils': './src/utils',
          '@assets': './src/assets',
          '@constants': './src/constants',
          '@services': './src/services',
          '@hooks': './src/hooks',
          '@redux': './src/redux',
          '@navigation': './src/navigation'

        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
};