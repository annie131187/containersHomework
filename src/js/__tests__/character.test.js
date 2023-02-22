import Character from '../character';

test('test Character class', () => {
  const result = {
    _name: 'Frodo',
    _type: 'Swordsman',
    health: 100,
    level: 1,
  };

  expect(new Character('Frodo', 'Swordsman')).toEqual(result);
});

test('test Error short name', () => {
  function getPerson() {
    const person = new Character('F', 'Swordsman');
    return person;
  }
  expect(getPerson).toThrow(Error);
});

test('test Error long name', () => {
  function getPerson() {
    const person = new Character('Frodothemaster', 'Swordsman');
    return person;
  }
  expect(getPerson).toThrow(Error);
});

test('test Error character type', () => {
  function getPerson() {
    const person = new Character('Frodo', 'King');
    return person;
  }
  expect(getPerson).toThrow(Error);
});
