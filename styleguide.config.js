const path = require('path')

module.exports = {
  components: 'src/components/**/[A-Z]*.jsx',
  defaultExample: true,
  moduleAliases: {
    '@src': path.resolve(__dirname, 'src'),
    '@mock': path.resolve(__dirname, 'mock')
  },
  ribbon: {
    url: 'https://github.com/styleguidist/react-styleguidist'
  }
}
