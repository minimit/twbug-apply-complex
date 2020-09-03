const plugin = require('tailwindcss/plugin')

module.exports = plugin.withOptions(() => {
  return function ({ addComponents }) {

    addComponents({
      '.text-uppercase': {
        textTransform: 'uppercase !important',
      },
      '.red-text': {
        color: 'red !important',
      },
    })

  }
})
