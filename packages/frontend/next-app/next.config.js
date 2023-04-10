const nextConfig = {
  reactStrictMode: true,

  experimental: {
    externalDir: false,
  },

  async rewrites(){
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:3001/:path*',
      }
    ]
  }
};

module.exports = nextConfig;
