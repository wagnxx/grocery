const { injectBabelPlugin } = require('react-app-rewired');

module.exports = function override(config, env) {
    // do stuff with the webpack config...
    config = injectBabelPlugin(['import', { libraryName: 'antd-mobile', style: 'css' },
        { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }], config);
    config.devtool=false;
    config.entry.vendor=['react', 'react-dom','redux','react-redux','react-router',"antd",'antd-mobile']
    console.log(config.plugins)
    return config;
};