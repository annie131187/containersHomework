import Character from '../character';
import Team from '../set';

const user1 = new Character('Garry', 'Magician');
const user2 = new Character('Ron', 'Swordsman');

test('test add() method of Team class', () => {
  const myTeam = new Team();
  myTeam.add(user1);
  const result = { members: new Set([user1]) };
  expect(myTeam).toEqual(result);
});

test('test Error add() method of Team class', () => {
  const myTeam = new Team();
  function addUser() {
    myTeam.add(user1);
    myTeam.add(user1);
    return myTeam;
  }
  expect(addUser).toThrow(Error);
});

test('test addAll() method of Team class', () => {
  const myTeam = new Team();
  myTeam.addAll(user1, user2);
  const result = { members: new Set([user1, user2]) };
  expect(myTeam).toEqual(result);
});
test('test toArray() method of Team class', () => {
  const myTeam = new Team();
  myTeam.addAll(user1, user2);
  const myTeamArray = myTeam.toArray();
  const result = [
    {
      _name: 'Garry',
      _type: 'Magician',
      health: 100,
      level: 1,
    },
    {
      _name: 'Ron',
      _type: 'Swordsman',
      health: 100,
      level: 1,
    },
  ];
  expect(myTeamArray).toEqual(result);
});
