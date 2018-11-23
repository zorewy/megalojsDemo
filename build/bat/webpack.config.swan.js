const createBaseConfig = require( './createBaseConfig' )
const config = createBaseConfig( 'swan' )
console.log(process.env.env_config)
module.exports = config
