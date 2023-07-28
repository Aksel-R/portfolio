/** @type {import('next').NextConfig} */
const nextConfig = {images: {
    domains: ["upload.wikimedia.org"],
  },
  webpack: (config, options) =>
  {
      config.module.rules.push({
          test: /\.pdf$/i,
          type: 'asset/source'
      })

      return config
  },
}

 
module.exports = nextConfig
