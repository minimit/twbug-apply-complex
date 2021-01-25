const plugin = require('tailwindcss/plugin')

module.exports = plugin.withOptions(() => {
  return function ({ addUtilities }) {

    addUtilities({
      '.plugin': {
        position: 'initial',
        '> .plugin-inner': {
          display: 'inline-block',
          '@apply nested-apply !important': '',
        },
      },
      '.nested-apply': {
        display: 'block',
      },
    }, ['responsive'])

  }
})