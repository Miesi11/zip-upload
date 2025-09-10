/**
 * Next.js configuration.
 *
 * The `output: 'export'` option tells Next.js to generate a fully static
 * export of your site into the `out` directory. This is required for
 * deployment to GitHub Pages or other static hosting services. Adjust
 * `basePath` and `assetPrefix` to match the repository name on GitHub.
 */

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Generates a static site in the `out` folder when running `next export`.
  output: 'export',
  // Base path where the site will be served. Replace `<repo-name>` with
  // your GitHub repository name if deploying to GitHub Pages.
  basePath: '/zip-upload',
  // Asset prefix ensures that static assets are loaded correctly on GitHub Pages.
  assetPrefix: '/zip-upload/',
  // Disable the built-in image optimiser for GitHub Pages compatibility.
  images: { unoptimized: true },
  // Enable React strict mode.
  reactStrictMode: true,
};

export default nextConfig;