const Server4test = require('./server4test');
const getHTTP = require('./getHTTP');

describe('server4test', () => {
    it('create instance', async () => {
        const server = new Server4test();
        expect(server.started).toBe(false);
    });

    it('get new port', async () => {
        const server = new Server4test();
        const port = await server.start();

        expect(port).toBeDefined();
        expect(port).toBeGreaterThan(1024);
    });

    it('echo request', async () => {
        const server = new Server4test();
        const port = await server.start();

        const req = {
            host: 'localhost',
            port: port,
            path: '/',
            method: 'get',
        };
        const res = await getHTTP(req);
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
    });

    it('GET predefined response', async () => {
        const server = new Server4test();
        const port = await server.start();

        const req = {
            host: 'localhost',
            port: port,
            path: '/',
            method: 'get',
        };
        server.response('get', '/', JSON.stringify({ ok: true }));
        const res = await getHTTP(req);
        expect(res).toEqual({ res: { ok: true }, status: 200 });
        server.stop();
    });

    it('POST predefined response', async () => {
        const server = new Server4test();
        const port = await server.start();

        const req = {
            host: 'localhost',
            port: port,
            path: '/cliente',
            method: 'post',
        };
        server.response('Post', '/cliente', JSON.stringify({ ok: true }));
        const res = await getHTTP(req);
        expect(res).toEqual({ res: { ok: true }, status: 200 });
        server.stop();
    });
});
