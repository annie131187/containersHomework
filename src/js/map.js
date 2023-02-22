export default class ErrorRepository {
  constructor() {
    this.errors = new Map([[1, 'Персонажа такого типа не существует!'], [2, 'Такой персонаж уже есть! Выберите другого!'], [3, 'Имя персонажа слишком короткое! Используйте минимум 2 символа'], [4, 'Имя персонажа слишком длинное! Используйте максимум 10 символов']]);
  }

  translate(code) {
    if (this.errors.get(code) === undefined) {
      return 'Unknown error';
    }
    return this.errors.get(code);
  }
}
