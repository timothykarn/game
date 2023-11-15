import { add } from '../src';

describe('testing index file', () => {
    test('3 + 5 should result in 8', () => {
        expect(add(3, 5)).toBe(8);
    });
});