const Filter = require('./filter')
// exportation de la classe
module.exports = class Ehpad extends Filter {

    static match(message) {
        return message.content.search(/ehpad/i)
    }

    static action(message) {
        // détectionsi c'est le bot qui publie le message
        message.reply('Couz t\'emmerde, branleur :middle_finger: !!!')
        message.react('🖕')
    }

}