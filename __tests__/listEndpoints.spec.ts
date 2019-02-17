import * as express from 'express';
import listEndpoints from '../src/listEndpoints';

test('1 rota e 1 metodo', () => {
  const app = express();
  const ctrl = (req, res) => {};
  app.get('/path', ctrl);
  expect(listEndpoints(app)).toEqual({ '/path': ['GET'] });
});

test('1 rota e 2 metodos', () => {
  const app = express();
  const ctrl = (req, res) => {};
  app.get('/path', ctrl);
  app.put('/path', ctrl);
  expect(listEndpoints(app)).toEqual({ '/path': ['GET', 'PUT'] });
});

test('2 rota e 2 metodos', () => {
  const app = express();
  const ctrl = (req, res) => {};
  app.get('/path1', ctrl);
  app.get('/path2', ctrl);
  app.put('/path2', ctrl);
  expect(listEndpoints(app)).toEqual({
    '/path1': ['GET'],
    '/path2': ['GET', 'PUT'],
  });
});
