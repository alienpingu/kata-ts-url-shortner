import sum from '../src/utils/sum';

describe("sum", () => {
    it("Should return 8 for sum 3 and 5", () => expect(sum(3, 5)).toBe(8))
});

