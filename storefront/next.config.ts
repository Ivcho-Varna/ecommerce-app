// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    // Optional: Add a custom image loader if using next/image
    images: {
        unoptimized: true, // For simplest static export with images
    },
    basePath: '/ecommerce-app',
    // Set the asset prefix to match the GitHub Pages URL
    assetPrefix: '/ecommerce-app',
}

module.exports = nextConfig