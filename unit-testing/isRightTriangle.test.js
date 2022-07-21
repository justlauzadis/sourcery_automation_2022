const isRightTriangle = require('./isRightTriangle');
const isTriangle = require('./isTriangle');

test('3, 4, 5 is triangle', () => {
    expect(isTriangle(3, 4, 5)).toBe(true);
});
test('1, 1, 1 is triangle', () => {
    expect(isTriangle(1,1,1)).toBe(true);
});
test('0, 0, 0 is triangle', () => {
    expect(isTriangle(0,0,0,)).toBe(false);
});
test('-1, 1, 1 is triangle', () => {
    expect(isTriangle(-1,2,5)).toBe(false);
});
test('3.2, 4.4, 5.1 is triangle', () => {
    expect(isTriangle(3.2, 4.4, 5.1)).toBe(true);
});
test('a, b, c is triangle', () => {
    expect(isTriangle('a','b','c')).toBe(false);
});
test('1, 1, 3 is triangle', () => {
    expect(isTriangle(1,1,3)).toBe(false);
});
test('a,b,c is not a triangle',() =>{
    //arrange
    let a = 'a';
    let b = 'b';
    let c = 'c';
    let expected = false;
    
    //act
    let result = isRightTriangle(a,b,c);

    //assert
    expect(result),toBe(expected);
});