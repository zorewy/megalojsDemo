const createBaseConfig = require( './createBaseConfig' )
const config = createBaseConfig( process.env.env_config )
const merge = require('merge')

module.exports = merge(createBaseConfig, {
  module: {}
})
module.exports = config
