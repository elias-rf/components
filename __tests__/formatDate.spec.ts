import formatDate from '../src/formatDate';

describe('formatDateBr', () => {
  it('dever receber uma string', () => {
    expect(formatDate(new Date(2000, 1, 1), 'DD/MM/YYYY')).toBe('01/02/2000');
  });
});
