/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: process.env.BASE_PATH,
    images: {
        loader: 'imgix',
        path: process.env.BASE_PATH,
    },
    output: 'standalone',
};

module.exports = nextConfig;