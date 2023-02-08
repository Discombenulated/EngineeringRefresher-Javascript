function Year(year) {
    this.year = year;
}

Year.prototype.isLeapYear = function() {
    return this.year % 4 == 0;
}

module.exports = {Year}