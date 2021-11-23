import Cells from '../cells';

test('Created Cells class', () => {
  const field = document.createElement('div');

  const num = new Cells(4, 4, field);

  expect(num.x).toBe(4);
});
