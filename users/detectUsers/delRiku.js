const Riku = require('./riku')
// exportation de la classe
module.exports = class DelRiku extends Riku {

    static match(message) {
        console.log(message.author.username)
        return message.author.username
    }

    static action(message) {
        console.log(message.author.username)

        message.delete()
        message.reply('Karma')
    }
}