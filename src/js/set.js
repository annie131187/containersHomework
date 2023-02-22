export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(username) {
    if (this.members.has(username)) {
      throw new Error('Такой персонаж уже есть! Выберите другого!');
    } else {
      this.members.add(username);
    }
  }

  addAll(...username) {
    username.forEach((item) => this.members.add(item));
  }

  toArray() {
    const arrayOfMembers = Array.from(this.members);
    return arrayOfMembers;
  }
}
