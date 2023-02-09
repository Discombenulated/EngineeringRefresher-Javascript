const { Lift } = require("./lift");

describe('Lift ', () => {
    test('When lift is created, starts on floor 0', () =>{
        let lift = new Lift();
        expect(lift.Floor()).toEqual(0);
    })

    test('When lift movesUp, floor increases', () =>{
        let lift = new Lift();
        lift.Up();
        expect(lift.Floor()).toEqual(1);
        lift.Up();
        expect(lift.Floor()).toEqual(2);
    })
})