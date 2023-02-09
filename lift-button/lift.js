class Lift {
    #floor;

    constructor(){
        this.#floor = 0;
    }

    Floor() {
        return this.#floor;
    }

    Up(){
        this.#floor++;
    }
}

module.exports = {Lift}