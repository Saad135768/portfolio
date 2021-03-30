const withImages = require('next-images')

module.exports = withImages({
  i18n: {
    locales: ['en', 'ar'],
    defaultLocale: 'en',
  },
})
