const path = require('path')
const utils = require( './utils' );
const glob = require('glob')
const createBaseConfig = require( './createBaseConfig' )
const config = createBaseConfig( 'alipay' )

module.exports = config
