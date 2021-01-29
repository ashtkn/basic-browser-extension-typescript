import { merge } from 'webpack-merge'
import baseConfig from './webpack.common'

const config = merge(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
})

export default config
