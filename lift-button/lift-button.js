class LiftButton {
    #floor;
    #isLampOn;

    constructor(floor){
        this.#floor = floor;
        this.#isLampOn = false;
    }

    isLampOn() {
        return this.#isLampOn;
    }

    press() {
        this.#isLampOn = true;
    }
}

module.exports = {LiftButton}