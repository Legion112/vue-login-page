import confirmFactory from './confirm';

const error = 'Value is not same';
const password = 'password';
describe('Fail cases', () => {
  test.each([['bar'],])('Value: %p', (confirmValue: string) => {
    const confirm = confirmFactory(confirmValue)
    expect(confirm(password)).toEqual(error);
  });
});

describe('Success cases', () => {
  test.each([[password],])('Value: %p', (confirmValue: string) => {
    const confirm = confirmFactory(confirmValue);
    expect(confirm(password)).toBeTruthy();
  });
})