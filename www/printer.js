
var exec = require('cordova/exec');

var AlphaPrinter = {
    print: function(ip, port, data) {
        return new Promise((resolve, reject) => {
            exec(resolve, reject, 'AlphaPrinter', 'print', [ip, port, data]);
        });
    },

    testConnection: function(ip, port) {
        return new Promise((resolve, reject) => {
            exec(resolve, reject, 'AlphaPrinter', 'testConnection', [ip, port]);
        });
    }
};

module.exports = AlphaPrinter;