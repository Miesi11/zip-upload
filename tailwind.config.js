/**
 * Tailwind CSS configuration.
 *
 * This configuration defines the paths that Tailwind should scan for class
 * names so that unused styles can be purged from the final build. The paths
 * listed here should include all directories where your JSX/TSX and MDX
 * components reside. If you add additional directories to your project,
 * update the `content` array accordingly.
 */

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};