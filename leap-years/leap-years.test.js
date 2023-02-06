const { isLeapYear } = require("./leap-years");

describe('Leap years', () => {
    test('2001 is a not a leap year', () =>{
        expect(isLeapYear(2001)).toEqual(false);
    })

    test('1996 is a leap year', () =>{
        expect(isLeapYear(1996)).toEqual(true);
    })
})