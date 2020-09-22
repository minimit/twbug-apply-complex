module.exports = {
  purge: [],
  future: {
    removeDeprecatedGapUtilities: true,
  },
  experimental: {
    applyComplexClasses: true,
  },
  theme: {
    extend: {
    },
  },
  variants: {},
  plugins: [require('./tailwind-plugin')],
}
