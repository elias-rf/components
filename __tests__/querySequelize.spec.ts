import * as qs from 'qs';
import QuerySequelize from '../src/querySequelize';

const Op = {
  eq: Symbol('eq'),
  ne: Symbol('ne'),
  and: Symbol('and'),
  or: Symbol('or'),
  gt: Symbol('gt'),
  gte: Symbol('gte'),
  lt: Symbol('lt'),
  lte: Symbol('lte'),
  like: Symbol('like'),
  notLike: Symbol('notLike'),
};

const querySequelize = new QuerySequelize(Op);

/**
 * @test {querySequelize}
 */
describe('querySequelize', () => {
  let qry = {};
  let rsp = {};

  it('query vazio', () => {
    qry = qs.parse('');
    rsp = {};
    expect(querySequelize.parse(qry)).toEqual(rsp);
  });

  it('skip e limit', () => {
    qry = qs.parse('SKIP=10&LIMIT=10');
    rsp = { offset: 10, limit: 10 };
    expect(querySequelize.parse(qry)).toEqual(rsp);
  });

  it('fields', () => {
    qry = qs.parse('FIELDS=a,b');
    rsp = { attributes: ['a', 'b'] };
    expect(querySequelize.parse(qry)).toEqual(rsp);
  });

  it('SORT -', () => {
    qry = qs.parse('SORT=-a');
    rsp = { order: [['a', 'DESC']] };
    expect(querySequelize.parse(qry)).toEqual(rsp);
  });

  it('SORT', () => {
    qry = qs.parse('SORT=a');
    rsp = { order: [['a']] };
    expect(querySequelize.parse(qry)).toEqual(rsp);
  });

  it('where ""', () => {
    qry = qs.parse('a=');
    rsp = {};
    expect(querySequelize.parse(qry)).toEqual(rsp);
  });

  it('where numérico', () => {
    qry = qs.parse('a=1');
    rsp = { where: { a: '1' } };
    expect(querySequelize.parse(qry)).toEqual(rsp);
  });

  it('where 2 campos', () => {
    qry = qs.parse('a=1&b=2');
    rsp = { where: { a: '1', b: '2' } };
    expect(querySequelize.parse(qry)).toEqual(rsp);
  });

  it('where texto', () => {
    qry = qs.parse('a=Abc');
    rsp = { where: { a: 'Abc' } };
    expect(querySequelize.parse(qry)).toEqual(rsp);
  });

  it('where data d/m/y', () => {
    qry = qs.parse('a=01/12/2000');
    rsp = { where: { a: '2000-12-01' } };
    expect(querySequelize.parse(qry)).toEqual(rsp);
  });

  it('where data d/m', () => {
    const ano = new Date().getFullYear();
    qry = qs.parse('a=1/12');
    rsp = { where: { a: `${ano}-12-01` } };
    expect(querySequelize.parse(qry)).toEqual(rsp);
  });

  it('where data texto', () => {
    qry = qs.parse('a=01/12/2000&b=A');
    rsp = { where: { a: '2000-12-01', b: 'A' } };
    expect(querySequelize.parse(qry)).toEqual(rsp);
  });

  it('where <', () => {
    qry = qs.parse('a[lt]=1');
    rsp = { where: { a: { [Op.lt]: '1' } } };
    expect(querySequelize.parse(qry)).toEqual(rsp);
  });

  it('where <=', () => {
    qry = qs.parse('a[lte]=1');
    rsp = { where: { a: { [Op.lte]: '1' } } };
    expect(querySequelize.parse(qry)).toEqual(rsp);
  });

  it('where >', () => {
    qry = qs.parse('a[gt]=1');
    rsp = { where: { a: { [Op.gt]: '1' } } };
    expect(querySequelize.parse(qry)).toEqual(rsp);
  });

  it('where >=', () => {
    qry = qs.parse('a[gte]=1');
    rsp = { where: { a: { [Op.gte]: '1' } } };
    expect(querySequelize.parse(qry)).toEqual(rsp);
  });

  it('where !', () => {
    qry = qs.parse('a[notLike]=1');
    rsp = { where: { a: { [Op.notLike]: '1' } } };
    expect(querySequelize.parse(qry)).toEqual(rsp);
  });

  it('where *', () => {
    qry = qs.parse('a[like]=%1%');
    rsp = { where: { a: { [Op.like]: '%1%' } } };
    expect(querySequelize.parse(qry)).toEqual(rsp);
  });

  it('where !#', () => {
    qry = qs.parse('a[ne]=null');
    rsp = { where: { a: { [Op.ne]: null } } };
    expect(querySequelize.parse(qry)).toEqual(rsp);
  });

  it('where #', () => {
    qry = qs.parse('a=null');
    rsp = { where: { a: null } };
    expect(querySequelize.parse(qry)).toEqual(rsp);
  });

  it('where full', () => {
    qry = qs.parse('SKIP=10&LIMIT=10&FIELDS=a,b&SORT=b&a=1');
    rsp = {
      offset: 10,
      limit: 10,
      attributes: ['a', 'b'],
      order: [['b']],
      where: { a: '1' },
    };
    expect(querySequelize.parse(qry)).toEqual(rsp);
  });

  it('where full empty', () => {
    qry = qs.parse('SKIP=&LIMIT=&FIELDS=&SORT=&id=');
    rsp = {};
    expect(querySequelize.parse(qry)).toEqual(rsp);
  });
});
