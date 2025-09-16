/** @type {import('next').NextConfig} */
const nextConfig = {
  // webpack: (config) => {
 turbopack: (config: any) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'antd/lib': 'antd/es'
    }
    return config
  },
  transpilePackages: ['antd']
}

module.exports = nextConfig