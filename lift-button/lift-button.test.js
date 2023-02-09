const { LiftButton } = require("./lift-button");

describe('Lift Button', () => {
    test('When button is created, lamp is off', () =>{
        let lift = new Lift();
        let button = new LiftButton(1, lift);
        expect(button.isLampOn()).toEqual(false);
    })

    test('When lift button pressed, lamp comes on', () =>{
        let lift = new Lift();
        let button = new LiftButton(1, lift);
        button.press();
        expect(button.isLampOn()).toEqual(true);
    })
})