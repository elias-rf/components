var http = require('http');
var https = require('https');
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
//# sourceMappingURL=getHTTP.js.map