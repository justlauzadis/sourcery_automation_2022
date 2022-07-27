const isRightTriangle = require('./isRightTriangle');

test('3, 4, 5 is triangle', () => {
    expect(isRightTriangle(3, 4, 5)).toBe(true);
});


test('0, 4, 5 is not triangle', () => {
    expect(isRightTriangle(0, 4, 5)).toBe(false);
});

