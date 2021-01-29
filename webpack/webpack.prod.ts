import { merge } from 'webpack-merge'
import baseConfig from './webpack.common'

const config = merge(baseConfig, {
  mode: 'production',
})

export default config
