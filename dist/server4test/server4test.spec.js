var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const Server4test = require('./server4test');
const getHTTP = require('./getHTTP');
describe('server4test', () => {
    it('create instance', () => __awaiter(this, void 0, void 0, function* () {
        const server = new Server4test();
        expect(server.started).toBe(false);
    }));
    it('get new port', () => __awaiter(this, void 0, void 0, function* () {
        const server = new Server4test();
        const port = yield server.start();
        expect(port).toBeDefined();
        expect(port).toBeGreaterThan(1024);
    }));
    it('echo request', () => __awaiter(this, void 0, void 0, function* () {
        const server = new Server4test();
        const port = yield server.start();
        const req = {
            host: 'localhost',
            port: port,
            path: '/',
            method: 'get',
        };
        const res = yield getHTTP(req);
        expect(res).toEqual({
            status: 200,
            res: {
                headers: { host: 'localhost:' + port, connection: 'close' },
                path: '/',
                method: 'GET',
                query: {},
                body: {},
                files: {},
            },
        });
        server.stop();
    }));
    it('GET predefined response', () => __awaiter(this, void 0, void 0, function* () {
        const server = new Server4test();
        const port = yield server.start();
        const req = {
            host: 'localhost',
            port: port,
            path: '/',
            method: 'get',
        };
        server.response('get', '/', JSON.stringify({ ok: true }));
        const res = yield getHTTP(req);
        expect(res).toEqual({ res: { ok: true }, status: 200 });
        server.stop();
    }));
    it('POST predefined response', () => __awaiter(this, void 0, void 0, function* () {
        const server = new Server4test();
        const port = yield server.start();
        const req = {
            host: 'localhost',
            port: port,
            path: '/cliente',
            method: 'post',
        };
        server.response('Post', '/cliente', JSON.stringify({ ok: true }));
        const res = yield getHTTP(req);
        expect(res).toEqual({ res: { ok: true }, status: 200 });
        server.stop();
    }));
});
//# sourceMappingURL=server4test.spec.js.map