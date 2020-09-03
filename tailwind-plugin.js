const plugin = require('tailwindcss/plugin')

module.exports = plugin.withOptions(() => {
  return function ({ addComponents }) {

    addComponents({
      '.red-text': {
        color: 'black !important',
        '.red-text-inner': {
          color: 'red !important',
        },
      },
      '.text-uppercase': {
        '@apply red-text': '',
      },
    })

  }
})
