import { Stock } from './stock';

describe('Stock', () => {
  it('should create an instance', () => {
    expect(new Stock(0, 0, "")).toBeTruthy();
  });
});
