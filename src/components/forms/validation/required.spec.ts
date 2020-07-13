import required from './required';

const error = 'The value cannot be blank';
describe('Fail cases', ()=> {
  test.each(['', ' ', null, undefined])('Value: %p', (value) => {
    expect(required(value)).toEqual(error);
  });
});

describe('Success cases', ()=>{
  test.each(['a', 1, 0, -1])( 'Value: %p', (value)=>{
    expect(required(value)).toBeTruthy();
  });
})