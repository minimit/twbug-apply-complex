const plugin = require('tailwindcss/plugin')

module.exports = plugin.withOptions(() => {
  return function ({ addComponents }) {

    addComponents({
      '.red-text': {
        color: 'red !important',
      },
    })

  }
})
