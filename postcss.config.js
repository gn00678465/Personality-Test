const autoprefixer = require('autoprefixer')();
const tailwindcss = require('tailwindcss')('./tailwind.config.js');
const postcssImport = require('postcss-import');
// eslint-disable-next-line import/no-extraneous-dependencies
const purgecss = require('@fullhuman/postcss-purgecss');

purgecss({
  content: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
  ],
  defaultExtractor: (content) => {
    const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [];
    const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || [];
    return broadMatches.concat(innerMatches);
  },
});

module.exports = {
  plugins: [
    tailwindcss,
    autoprefixer,
    postcssImport,
    ...process.env.NODE_ENV === 'production'
      ? [purgecss]
      : [],
  ],
};
