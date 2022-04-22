import getMsg from './utils';
import HelloWorld from '../../src/components/HelloWorld.vue';

test('1+1=2', () => {
  expect(1 + 1).toBe(2);
});
test('getMsg', () => {
  expect(getMsg()).toBe('this is msg');
});
test('HelloWorld', () => {
  console.log('HelloWorld', HelloWorld);
});
