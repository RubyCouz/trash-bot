const Filter = require('./filter')
// exportation de la classe
module.exports = class Zatox extends Filter {



    static match(message) {
        return message.content.search(/alt\+f4|rage|ragequit|altf4|zatox|sel/i)
    }
    static action(message) {
        const rageMess = [
            'Attend, j\'appelle @Zatox#1891...',
            '@Zatox#1891, on te pique ta technique',
            'Ouais, va pas casser ta manette !!!',
            'https://tenor.com/view/mohamed-henni-bloger-fan-de-om-fan-de-marseille-youtuber-gif-12597020',
            'https://tenor.com/view/mohamed-henni-nul-gif-13266143'
        ]
        if (!message.author.bot) {
            let randomInt = this.randomNumber(0, 4)
            message.channel.send(rageMess[randomInt])
        }
    }

}