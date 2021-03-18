module.exports = class User {

    static parse(message) {
        if (this.match(message) == 'Charlemagne' || this.match(message) == 'MEE6') {
            this.action(message)
            return true
        } else {
            return false
        }
    }

    static match(message) {
        return false
    }

    static actions(message) {

    }

    static randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
}