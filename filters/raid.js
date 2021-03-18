const Filter = require('./filter')
// exportation de la classe
module.exports = class Raid extends Filter {


    static match(message) {
        return message.content.search(/raid|tryhard|try hard/i)
    }

    static action(message) {
        // détectionsi c'est le bot qui publie le message
        if (!message.author.bot) {
            message.channel.send('https://tenor.com/view/raid-destiny-seagull-gif-19244751')
        }
    }

    // }
}