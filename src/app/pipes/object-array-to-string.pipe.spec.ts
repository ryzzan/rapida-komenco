import { ObjectArrayToStringPipe } from './object-array-to-string.pipe';

describe('ObjectArrayToStringPipe', () => {
  it('create an instance', () => {
    const pipe = new ObjectArrayToStringPipe();
    expect(pipe).toBeTruthy();
  });
});
