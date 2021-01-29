import { Configuration } from 'webpack'
import path from 'path'
import CopyWebpackPlugin from 'copy-webpack-plugin'

const srcDir = path.join(__dirname, '..', 'src')
const distDir = path.join(__dirname, '..', 'dist')

const config: Configuration = {
  entry: {
    content_scripts: path.join(srcDir, 'content_scripts.ts'),
  },
  output: {
    path: distDir,
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /.ts$/,
        use: 'ts-loader',
        exclude: '/node_modules/',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ from: 'public', to: '.' }],
    }),
  ],
}

export default config
