# server4test

## Definição
Pode ser usado como servidor de testes para clientes HTTP.

## Uso:

Quando usado para echo:

```js
const Server4test = require('server4test');

const server = new Server4test(); // cria uma nova instancia
const port = await server.start(); // inicia o servidor e retorna a porta usada
const res = await fetch(`http://localhost:${port}/`);
/* resposta esperada
{
    headers: { host: 'localhost:23000, connection: 'close' },
    path: '/',
    method: 'GET',
    query: {},
    body: {},
    files: {},
}
*/
server.stop();
```


Quando usado para route:

```js
const Server4test = require('server4test');

const server = new Server4test(); // cria uma nova instancia
const port = await server.start(); // inicia o servidor e retorna a porta usada
server.response('get', '/', JSON.stringify({ ok: true }));
const res = await fetch(`http://localhost:${port}/`);
/* resposta esperada
{ ok: true }
*/
server.stop();
```
