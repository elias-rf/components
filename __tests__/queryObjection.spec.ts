import * as qs from 'qs';
import * as Knex from 'knex';
import * as objection from 'objection';
import queryObjection from '../src/queryObjection';

const Op = {
  eq: '=',
  ne: 'not =',
  and: 'and',
  or: 'or',
  gt: '>',
  gte: '>=',
  lt: '<',
  lte: '<=',
  like: 'like',
  notLike: 'not Like',
};

/**
 * @test {queryObjection}
 */
describe('queryObjection', () => {
  let qry = {};
  let rsp = {};
  const knex = Knex({
    client: 'sqlite3',
    useNullAsDefault: true,
  });
  objection.Model.knex(knex);
  class Teste extends objection.Model {
    static get tableName() {
      return 'teste';
    }
  }

  it('query vazio', () => {
    qry = qs.parse('');
    rsp = 'select `teste`.* from `teste`';
    expect(queryObjection(qry, Teste).toString()).toEqual(rsp);
  });

  it('skip e limit', () => {
    qry = qs.parse('SKIP=10&LIMIT=5');
    rsp = 'select `teste`.* from `teste` limit 5 offset 10';
    expect(queryObjection(qry, Teste).toString()).toEqual(rsp);
  });

  it('fields', () => {
    qry = qs.parse('FIELDS=a,b');
    rsp = 'select `a`, `b` from `teste`';
    expect(queryObjection(qry, Teste).toString()).toEqual(rsp);
  });

  it('SORT -', () => {
    qry = qs.parse('SORT=-a');
    rsp = 'select `teste`.* from `teste` order by `a` desc';
    expect(queryObjection(qry, Teste).toString()).toEqual(rsp);
  });

  it('SORT', () => {
    qry = qs.parse('SORT=a');
    rsp = 'select `teste`.* from `teste` order by `a` asc';
    expect(queryObjection(qry, Teste).toString()).toEqual(rsp);
  });

  it('where ""', () => {
    qry = qs.parse('a=');
    rsp = "select `teste`.* from `teste` where `a` = ''";
    expect(queryObjection(qry, Teste).toString()).toEqual(rsp);
  });

  it('where numérico', () => {
    qry = qs.parse('a=1');
    rsp = "select `teste`.* from `teste` where `a` = '1'";
    expect(queryObjection(qry, Teste).toString()).toEqual(rsp);
  });

  it('where 2 campos', () => {
    qry = qs.parse('a=1&b=2');
    rsp = "select `teste`.* from `teste` where `a` = '1' and `b` = '2'";
    expect(queryObjection(qry, Teste).toString()).toEqual(rsp);
  });

  it('where texto', () => {
    qry = qs.parse('a=Abc');
    rsp = "select `teste`.* from `teste` where `a` = 'Abc'";
    expect(queryObjection(qry, Teste).toString()).toEqual(rsp);
  });

  it('where data d/m/y', () => {
    qry = qs.parse('a=01/12/2000');
    rsp = "select `teste`.* from `teste` where `a` = '2000-12-01'";
    expect(queryObjection(qry, Teste).toString()).toEqual(rsp);
  });

  it('where data d/m', () => {
    const ano = new Date().getFullYear();
    qry = qs.parse('a=1/12');
    rsp = "select `teste`.* from `teste` where `a` = '2019-12-01'";
    expect(queryObjection(qry, Teste).toString()).toEqual(rsp);
  });

  it('where data texto', () => {
    qry = qs.parse('a=01/12/2000&b=A');
    rsp =
      "select `teste`.* from `teste` where `a` = '2000-12-01' and `b` = 'A'";
    expect(queryObjection(qry, Teste).toString()).toEqual(rsp);
  });

  it('where <', () => {
    qry = qs.parse('a[lt]=1');
    rsp = "select `teste`.* from `teste` where `a` < '1'";
    expect(queryObjection(qry, Teste).toString()).toEqual(rsp);
  });

  it('where <=', () => {
    qry = qs.parse('a[lte]=1');
    rsp = "select `teste`.* from `teste` where `a` <= '1'";
    expect(queryObjection(qry, Teste).toString()).toEqual(rsp);
  });

  it('where >', () => {
    qry = qs.parse('a[gt]=1');
    rsp = { where: { a: { [Op.gt]: '1' } } };
    rsp = "select `teste`.* from `teste` where `a` > '1'";
    expect(queryObjection(qry, Teste).toString()).toEqual(rsp);
  });

  it('where >=', () => {
    qry = qs.parse('a[gte]=1');
    rsp = "select `teste`.* from `teste` where `a` >= '1'";
    expect(queryObjection(qry, Teste).toString()).toEqual(rsp);
  });

  it('where !', () => {
    qry = qs.parse('a[notLike]=1');
    rsp = "select `teste`.* from `teste` where `a` not like '1'";
    expect(queryObjection(qry, Teste).toString()).toEqual(rsp);
  });

  it('where *', () => {
    qry = qs.parse('a[like]=%1%');
    rsp = "select `teste`.* from `teste` where `a` like '%1%'";
    expect(queryObjection(qry, Teste).toString()).toEqual(rsp);
  });

  it('where !#', () => {
    qry = qs.parse('a[ne]=null');
    rsp = 'select `teste`.* from `teste` where `a` is not null';
    expect(queryObjection(qry, Teste).toString()).toEqual(rsp);
  });

  it('where #', () => {
    qry = qs.parse('a=null');
    rsp = { where: { a: null } };
    rsp = 'select `teste`.* from `teste` where `a` = NULL';
    expect(queryObjection(qry, Teste).toString()).toEqual(rsp);
  });

  it('where full', () => {
    qry = qs.parse('SKIP=10&LIMIT=5&FIELDS=a,b&SORT=b&a=1');
    rsp =
      "select `a`, `b` from `teste` where `a` = '1' order by `b` asc limit 5 offset 10";
    expect(queryObjection(qry, Teste).toString()).toEqual(rsp);
  });

  it('where full empty', () => {
    qry = qs.parse('SKIP=&LIMIT=&FIELDS=&SORT=&id=');
    rsp = "select `teste`.* from `teste` where `id` = ''";
    expect(queryObjection(qry, Teste).toString()).toEqual(rsp);
  });
});
