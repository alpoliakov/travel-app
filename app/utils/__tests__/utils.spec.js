import { convertFtoC } from '../utils';

describe('utils', () => {
  it('should convert fahrenheit to celsius', () => {
    expect(convertFtoC(55)).toBe(13);
  });
});
