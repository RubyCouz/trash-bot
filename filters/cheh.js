const Filter = require('./filter')
// exportation de la classe
module.exports = class Cheh extends Filter {



    static match(message) {
        return message.content.search(/cheh|fail|échec|raté/i)
    }
    static action(message) {
        const chehReply = [
            'cheh',
            'CHEH !!!',
            'Un gros CHEH dans ta gueule !!!',
            'https://tenor.com/view/nelson-monfort-i-hear-che-in-my-oreillette-smile-happy-gif-16762248',
            'https://tenor.com/view/cheh-bienfaits-duh-gif-12323680',
            'https://tenor.com/view/cheh-bien-fait-deserve-deserves-what-she-deserves-gif-11935657'
        ]
        if (!message.author.bot) {
            let randomInt = this.randomNumber(0, 5)
            message.channel.send(chehReply[randomInt])
        }
    }
    // }
}