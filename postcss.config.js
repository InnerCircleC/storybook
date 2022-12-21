module.exports = {
  syntax: 'postcss-html',
  plugins: {
    autoprefixer: {},
    'postcss-preset-env': {
      features: {
        'nesting-rules': true,
      },
    },
    tailwindcss: {},
  },
}
