import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
  env: {
    BASE_URL: process.env.BASE_URL,
  },
  images: {
    domains: ['intei.artwaga.com','static.lada.ru', 's3.timeweb.cloud'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'intei.artwaga.com',
        port: '',
        pathname: '/back_media/**',
      },
    ],
  },
  reactStrictMode: false,
  logging: {
    fetches: {
      fullUrl: false,
    },
  },
  webpack: (config, { isServer }) => {
    // Устанавливаем псевдоним для пути @ на папку src
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');

    const cssRule = config.module.rules.find(
      rule => rule.test && rule.test.toString().includes('.css')
    );

    if (cssRule) {
      cssRule.exclude = /\.swiper\.css$/;
    }

    config.module.rules.push({
      test: /\.swiper\.css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
          },
        },
        'postcss-loader',
      ],
    });

    return config;
  },
};

export default nextConfig;
