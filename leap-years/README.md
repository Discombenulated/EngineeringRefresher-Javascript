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