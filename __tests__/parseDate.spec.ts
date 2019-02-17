import parseDate from '../src/parseDate';

const ano = new Date().getFullYear();

describe('dateParse', () => {
  const exp = new Date(2016, 1, 1); // 01/02/2016
  const exp2 = new Date(ano, 1, 1);

  it('deve receber Date', () => {
    expect(parseDate(exp, 'D/M/Y')).toEqual(exp);
  });

  it('deve receber 01/02/2016 from full', () => {
    expect(parseDate('01/02/2016T00:00:00.000Z', 'DD/MM/YYYY')).toEqual(exp);
  });

  it('deve receber 01/02/2016', () => {
    expect(parseDate('01/02/2016', 'DD/MM/YYYY')).toEqual(exp);
  });

  it('deve receber data dd/mm/yyyy', () => {
    expect(parseDate('01/02/2016', 'DD/MM/YYYY')).toEqual(exp);
  });

  it('deve receber data dd/mm/yy', () => {
    expect(parseDate('01/02/16', 'DD/MM/YY')).toEqual(exp);
  });

  it('deve receber data dd/mm', () => {
    expect(parseDate('01/02', 'DD/MM')).toEqual(exp2);
  });

  it('deve receber data dd-mm-yyyy', () => {
    expect(parseDate('01-02-2016', 'DD-MM-YYYY')).toEqual(exp);
  });

  it('deve receber data dd-mm-yy', () => {
    expect(parseDate('01-02-16', 'DD-MM-YY')).toEqual(exp);
  });

  it('deve receber dd-mm', () => {
    expect(parseDate('01-02', 'DD-MM')).toEqual(exp2);
  });

  it('deve receber 2016-02-01', () => {
    expect(parseDate('2016-02-01', 'YYYY-MM-DD')).toEqual(exp);
  });

  it('deve receber 16-02-01', () => {
    expect(parseDate('16-02-01', 'YY-MM-DD')).toEqual(exp);
  });

  it('deve receber 02-01', () => {
    expect(parseDate('02-01', 'MM-DD')).toEqual(exp2);
  });

  it('deve receber ""', () => {
    expect(parseDate('', 'd-M-y')).toEqual(null);
  });

  it('deve receber null', () => {
    expect(parseDate(null, 'd-M-y')).toEqual(null);
  });

  it('deve receber qualquer coisa', () => {
    expect(parseDate(null)).toEqual(null);
    expect(parseDate('1')).toEqual(null);

    expect(parseDate('2-1')).toEqual(exp2);
    expect(parseDate('02-01')).toEqual(exp2);
    expect(parseDate('02-1')).toEqual(exp2);
    expect(parseDate('2-01')).toEqual(exp2);

    expect(parseDate('02-01-16')).toEqual(exp);
    expect(parseDate('02-01-2016')).toEqual(exp);

    expect(parseDate('1/2')).toEqual(exp2);
    expect(parseDate('01/02')).toEqual(exp2);

    expect(parseDate('01/02/16')).toEqual(exp);
    expect(parseDate('01/02/2016')).toEqual(exp);
  });
});
