// PostCSS configuration for Baydar & Baydar project
// Configures plugins for Tailwind CSS, autoprefixing, and modern CSS features

module.exports = {
  plugins: {
    // Tailwind CSS plugin for utility-first CSS framework
    '@tailwindcss/postcss': {},

    // Autoprefixer plugin to add vendor prefixes for better browser compatibility
    autoprefixer: {},

    // PostCSS Preset Env plugin to enable modern CSS features with fallbacks
    'postcss-preset-env': {
      stage: 1, // Enables modern CSS features
      features: {
        'nesting-rules': true, // Enables CSS nesting
      },
    },
  },
};
