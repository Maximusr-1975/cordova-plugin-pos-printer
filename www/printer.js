var exec = require('cordova/exec');

var POSPrinter = {
    print: function(ip, port, data) {
        return new Promise((resolve, reject) => {
            exec(resolve, reject, 'POSPrinter', 'print', [ip, port, data]);
        });
    },

    printHTML: function(ip, port, divId) {
        return new Promise((resolve, reject) => {
            const content = document.getElementById(divId).outerHTML;
            exec(resolve, reject, 'POSPrinter', 'printHTML', [ip, port, content]);
        });
    },

    testConnection: function(ip, port) {
        return new Promise((resolve, reject) => {
            exec(resolve, reject, 'POSPrinter', 'testConnection', [ip, port]);
        });
    }
};

module.exports = POSPrinter;