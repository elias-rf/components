var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const http = require('http');
const querystring = require('qs');
const url = require('url');
const net = require('net');
const formidable = require('formidable');
function findFreePort() {
    return new Promise((resolve, reject) => {
        const server = net.createServer();
        let port = 0;
        server.on('listening', () => {
            port = server.address().port;
            server.close();
        });
        server.on('close', () => {
            resolve(port);
        });
        server.on('error', (err) => {
            reject(err);
        });
        server.listen(0, '127.0.0.1');
    });
}
function server4test(options) {
    const self = this;
    this.port = 0;
    this.started = false;
    this.stopped = true;
    this.routes = {
        get: {},
        post: {},
        put: {},
        delete: {},
    };
    this.server = http.createServer((req, res) => {
        const method = req.method.toLowerCase();
        const myUrl = url.parse(req.url);
        if (self.routes[method] && self.routes[method][req.url]) {
            res.end(self.routes[method][req.url]);
        }
        else {
            const form = new formidable.IncomingForm();
            form.parse(req, (err, fields, files) => {
                if (req.headers.hasOwnProperty('status')) {
                    res.writeHead(req.headers.status, {
                        'Content-Type': 'application/json',
                    });
                }
                else {
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                }
                const response = {
                    headers: req.headers,
                    path: myUrl.pathname,
                    method: req.method,
                    query: querystring.parse(myUrl.query),
                    body: fields,
                    files,
                    withCredentials: req.withCredentials,
                };
                res.end(JSON.stringify(response));
            });
        }
    });
}
server4test.prototype.response = function (method, pathname, response) {
    const route = this.routes[method.toLowerCase()];
    route[pathname] = response;
};
server4test.prototype.start = function () {
    return __awaiter(this, void 0, void 0, function* () {
        const self = this;
        self.port = yield findFreePort();
        return new Promise((resolve, reject) => {
            if (this.started) {
                return resolve(self.port);
            }
            this.server.listen(self.port, (err) => {
                if (!err) {
                    self.started = true;
                    self.stopped = false;
                    return resolve(self.port);
                }
                reject(err);
            });
        });
    });
};
server4test.prototype.stop = function () {
    const self = this;
    return new Promise((resolve, reject) => {
        if (this.stopped) {
            return resolve();
        }
        this.server.close((err) => {
            if (!err) {
                self.started = false;
                self.stopped = true;
                return resolve();
            }
            reject(err);
        });
    });
};
module.exports = server4test;
//# sourceMappingURL=server4test.js.map