/* eslint no-underscore-dangle: ["error", { "allowAfterThis": true }] */
export default class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }

  set name(value) {
    if (value.length < 2) {
      throw new Error('Имя персонажа слишком короткое! Используйте минимум 2 символа');
    } else if (value.length > 10) {
      throw new Error('Имя персонажа слишком длинное! Используйте максимум 10 символов');
    }
    this._name = value;
  }

  set type(value) {
    const charTypes = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (!charTypes.includes(value)) {
      throw new Error('Персонажа такого типа не существует!');
    }
    this._type = value;
  }
}
