module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
    'postcss-preset-env': {
      stage: 1,
      features: {
        'nesting-rules': true,
      },
      browsers: 'last 2 versions',
    },
    ...(process.env.NODE_ENV === 'production' 
      ? { cssnano: { preset: 'default' } } 
      : {})
  },
};
