const Filter = require('./filter')
// exportation de la classe
module.exports = class Mom extends Filter {
    static match(message) {
        return message.content.search(/mère|daronne|maman|ntm/i)
    }

    static action(message) {

        // détectionsi c'est le bot qui publie le message
        if (!message.author.bot) {
            message.reply('Ah noooon... On a dit : "pas les mamans !!!')
        }
    }

    // }
}