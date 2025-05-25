// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    // Optional: Add a custom image loader if using next/image
    images: {
        unoptimized: true, // For simplest static export with images
    },
}

module.exports = nextConfig