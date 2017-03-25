'use strict';

module.exports = {
    plugins: ['qunar'],
    config: {
        exports: [
            './scripts/demo1.js',
            './styles/demo1.scss'
        ],
        modifyWebpackConfig: function(baseConfig) {
            return baseConfig
        },
        sync: {
            host : "192.168.237.71",
            path: "/home/q/www/qunarzz.com/ykit-seed-qunar"
        }
    },
    hooks: {},
    commands: []
};
