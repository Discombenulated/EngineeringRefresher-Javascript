class Year {
    constructor(year){
        this.year = year;
    }

    isLeapYear() {
        return this.year % 4 == 0;
    }
}

module.exports = {Year}