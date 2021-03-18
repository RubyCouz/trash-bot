const Filter = require('./filter')
// exportation de la classe
module.exports = class PainAuChocolat extends Filter {



    static match(message) {
        return message.content.search(/chocolatine/i)
    }
    static action(message) {
        const chocolatineMess = [
            'On dit "pain au chocolat", connard !!!',
            'Nope, essaie encore : PAIN AU CHOCOLAT',
            'Encore un effort : PAIN AU CHOCOLAT', 'Inculte...'
        ]
        let randomInt = this.randomNumber(0, 3)
        message.reply(chocolatineMess[randomInt])
    }
    // }
}