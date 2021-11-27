import Card from '../card';

test('Number it`s valid', () => {
  const card = new Card();
  card.cardNum = '4024007122398174';
  const rezult = card.luhnAlgorithm();

  expect(rezult).toBe(true);
});

test('Number not valid', () => {
  const card = new Card();
  card.cardNum = '4024007122398175';
  const rezult = card.luhnAlgorithm();

  expect(rezult).toBe(false);
});

test('Get system pay - visa', () => {
  const card = new Card();
  card.cardNum = '4024007122398174';
  const rezult = card.getPaySystem();

  expect(rezult).toBe('visa');
});

test('Get system pay - discover', () => {
  const card = new Card();
  card.cardNum = '6011303355779804';
  const rezult = card.getPaySystem();

  expect(rezult).toBe('discover');
});

test('Get system pay - not found', () => {
  const card = new Card();
  card.cardNum = '6386110823810161';
  const rezult = card.getPaySystem();

  expect(rezult).toBe(-1);
});
