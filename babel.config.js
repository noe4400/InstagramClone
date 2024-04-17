module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',

      {
        root: ['.'],
        alias: {
          '@/assets': './src/assets',
          '@/theme': './src/assets/theme',
          '@/components': './src/components',
          '@/HOCs': './src/components/HOCs',
          '@/styles': './src/navigation',
          '@/screens': './src/screens',
          '@/types': './src/types',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
