const isRightTriangle = require('./isRightTriangle');

test('3, 4, 5 is right triangle', () => {
    expect(isRightTriangle(3, 4, 5)).toBe(true);
});

test('0, 4, 5 is not a right triangle', () => {
    expect(isRightTriangle(0, 4, 5)).toBe(false);
});

test('5, 4, 0 is not a right triangle', () => {
    expect(isRightTriangle(5, 4, 0)).toBe(false);
});

test('-4, 0, 5 is not a right triangle', () => {
    expect(isRightTriangle(-4, 0, 5)).toBe(false);
});

test('A, 0, 5 is not a right triangle', () => {
    expect(isRightTriangle('A', 0, 5)).toBe(false);
});

test('10000000000, 1, 0.9 is  a not right triangle', () => {
    expect(isRightTriangle(1.1, 1, 0.9)).toBe(false);
});

test('1, 1, 0.9 is  a not right triangle', () => {
    expect(isRightTriangle(1.1, 1, 0.9)).toBe(false);
});