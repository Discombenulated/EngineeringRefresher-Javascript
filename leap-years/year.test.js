const { Year } = require("./year");

describe('Leap years', () => {
    test('2001 is a not a leap year', () =>{
        let year = new Year(2001);
        expect(year.isLeapYear()).toEqual(false);
    })

    test('1996 is a leap year', () =>{
        let year = new Year(1996);
        expect(year.isLeapYear()).toEqual(true);
    })
})