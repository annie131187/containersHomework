import ErrorRepository from '../map';

test('test ErrorRepository class', () => {
  const err = new ErrorRepository();
  expect(err.translate(1)).toBe('Персонажа такого типа не существует!');
  expect(err.translate(5)).toBe('Unknown error');
});
