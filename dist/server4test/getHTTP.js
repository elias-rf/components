var http = require('http');
var https = require('https');
/**
 * Executa um GET em HTTP
 *
 * @param {Object} options Opções
 * @param {string} options.host Endereço do servidor
 * @param {number} options.port
 * @param {string} options.path
 * @param {string} options.method
 * @param {Object} options.headers
 * @returns {Promise<Response>}
 */
module.exports = function getHTTP(options) {
    return new Promise((resolve, reject) => {
        var port = options.port === 443 ? https : http;
        var req = port.request(options, function (res) {
            var output = '';
            res.setEncoding('utf8');
            res.on('data', function (chunk) {
                output += chunk;
            });
            res.on('end', function () {
                var obj = JSON.parse(output);
                resolve({ status: res.statusCode, res: obj });
            });
        });
        req.on('error', function (err) {
            reject(err);
        });
        req.end();
    });
};
