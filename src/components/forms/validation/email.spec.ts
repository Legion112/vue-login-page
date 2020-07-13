import email from './email';

const error = 'Not valid email';
describe('Fail cases', ()=> {
  test.each(['', ' '])('Value: %p', (value) => {
    expect(email(value)).toEqual(error);
  });
});

describe('Success cases', ()=>{
  test.each(['a@a.a', 'a1@a1.a1'])( 'Value: %p', (value)=>{
    expect(email(value)).toBeTruthy();
  });
})