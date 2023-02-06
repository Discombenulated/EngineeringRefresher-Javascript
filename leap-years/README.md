# TDD via Leap years

## Pre-requisites
* Node 16
* npm
* vs code

### set up
run
```bash
mkdir leap-years
cd leap-years
npm init -y 
npm i jest --save-dev
touch leap-years.test.js
```

Add this framework checking test to the test file
```js
describe('Leap years', () => {
    test('framework works', () => {
        expect(true).toEqual(false)
    })
})
```

edit package.json to replace the scripts section with this:

```json
"scripts": {
    "test": "jest"
},
```

run
```
npm test
```

Failure is shown - hurrah!!!


# The Kata
Kata
Write a function that returns true or false depending on whether its input integer is a leap year or not.

A leap year is defined as one that is divisible by 4 but is not divisible by 100, unless it is also divisible by 400.

For example, 
* 2001 is a typical common year
* 1996 is a typical leap year
* 1900 is a common year 
* 2000 is a leap year

Acknowledgements
This kata is described on cyber-dojo.org and https://sammancoaching.org/kata_descriptions/leap_years.html

Write a function that returns true or false depending on whether its input integer is a leap year or not.

A leap year is defined as one that is divisible by 4, but is not otherwise divisible by 100 unless it is also divisible by 400.

For example, 2001 is a typical common year and 1996 is a typical leap year, whereas 1900 is an atypical common year and 2000 is an atypical leap year.