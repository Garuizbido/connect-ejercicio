
const isPalindrome = require('./isPalindrome');

test("Checks if palindrome", () =>{
    expect(isPalindrome('ana')).toBe(true);
    expect(isPalindrome('anna')).toBe(true);
    expect(isPalindrome('somos')).toBe(true);
    expect(isPalindrome('rotator')).toBe(true);
    expect(isPalindrome('reconocer')).toBe(true);
    expect(isPalindrome('connect')).toBe(false);
    expect(isPalindrome('ejercicio')).toBe(false);
    expect(isPalindrome('técnico')).toBe(false);
})