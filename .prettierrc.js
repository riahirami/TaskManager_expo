module.exports = {
    arrowParens: 'always',
    bracketSameLine: true,
    bracketSpacing: true,
    singleQuote: true,
    trailingComma: 'none',
    semi: true,
    importOrder: [
      '^react',
      '^react$',
      '^react-native$',
      '^redux',
      '^@',
      '^@$',
      '^[a-zA-Z]',
      '^_components/(.*)$',
      '^_navigation/(.*)$',
      '^_store/(.*)$',
      '^_models/(.*)$',
      '^_utils/(.*)$',
      '^_enums/(.*)$',
      '^_config/(.*)$',
      '^../(.*)$',
      '^./(.*)$'
    ],
    importOrderSeparation: true,
    experimentalBabelParserPluginsList: [
      'jsx',
      'typescript',
      'js',
      'classProperties'
    ],
    importOrderParserPlugins: ['classProperties', 'typescript', 'jsx']
  };
  