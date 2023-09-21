/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: process.env.NEXT_APP_PATH,
    output: 'standalone',
};

module.exports = nextConfig;