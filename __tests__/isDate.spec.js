const isDate = require('../src/isDate');

describe('isDate', () => {
  test('deve receber uma data', () => {
    expect(isDate(new Date())).toBeTruthy();
  });
});
