'use strict';

module.exports = {
    plugins: ['qunar'],
    config: {
        exports: [
            './scripts/demo1.js',
            './src/styles/demo1-1.css',
            './scripts/demo1-1.js',
            './scripts/demo3.js',
            './scripts/demo5.js',
            './styles/demo1.scss',
            './styles/demo4.css',
            './scripts/demo4.js',
            './scripts/main.js',
            './scripts/worker.js'
        ],
        modifyWebpackConfig: function(baseConfig) {
            var ENV_PARAMS = {};
            switch (this.env) {
                case 'local':
                    ENV_PARAMS = {name: 'local'};
                    break;
                case 'dev':
                    ENV_PARAMS = {name: 'dev'};
                    break;
                case 'prd':
                    ENV_PARAMS = {name: 'prd'};
                    break;
                default:
            }

            baseConfig.plugins.push(new this.webpack.DefinePlugin({
                ENV_PARAMS: JSON.stringify(ENV_PARAMS)
            }));
            return baseConfig
        },
        sync: {
            host : "192.168.237.71",
            path: "/home/q/www/qunarzz.com/webperformance"
        }
    },
    hooks: {},
    commands: []
};
