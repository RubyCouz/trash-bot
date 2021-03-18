const Filter = require('./filter')
// exportation de la classe
module.exports = class Noob extends Filter {



    static match(message) {
        return message.content.search(/noob/i)
    }
    static action(message) {
        // if (noob !== -1) {
            const noobMess = [
                'Noob',
                'Sale noob', 'Noooooooooooooooooooooooooooooooob !!!',
                'C\'toi le noob...',
                'Gros noob',
                'Noobie',
                'Mojitac',
                'Noobnoobnoobnoobnoobnoob'
            ]
            // détectionsi c'est le bot qui publie le message
            if (!message.author.bot) {
                let randomInt = this.randomNumber(0, 7)
                message.channel.send(noobMess[randomInt])
            }
        }
    // }
}