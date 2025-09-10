/*
 * PostCSS configuration for Next.js with Tailwind CSS.
 *
 * This file tells PostCSS which plugins to run when processing CSS files.
 * We include `tailwindcss` so that the Tailwind directives in our CSS files
 * expand into actual styles, and we include `autoprefixer` so that vendor
 * prefixes are added automatically for broader browser support.
 */

module.exports = {
  plugins: {
    // Enables Tailwind CSS processing. Without this, `@tailwind base;`,
    // `@tailwind components;` and `@tailwind utilities;` directives will
    // cause syntax errors in Next.js builds.
    tailwindcss: {},
    // Adds vendor prefixes to CSS rules using values from Can I Use.
    autoprefixer: {},
  },
};