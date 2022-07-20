const isTriangle = require('./isTriangle');

test('3, 4, 5 is triangle', () => {
    expect(isTriangle(3, 4, 5)).toBe(true);
});

test('0, 4, 5 is not a triangle', () => {
    expect(isTriangle(0, 4, 5)).toBe(false);
});

test('5, 4, 0 is not a triangle', () => {
    expect(isTriangle(5, 4, 0)).toBe(false);
});

test('4, 0, 5 is not a triangle', () => {
    expect(isTriangle(4, 0, 5)).toBe(false);
});

test('-4, 0, 5 is not a triangle', () => {
    expect(isTriangle(-4, 0, 5)).toBe(false);
});

test('A, 0, 5 is not a triangle', () => {
    expect(isTriangle('A', 0, 5)).toBe(false);
});

test('1.1, 1, 0.9 is  a triangle', () => {
    expect(isTriangle(1.1, 1, 0.9)).toBe(true);
});