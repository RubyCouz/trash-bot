const User = require('./user')
// exportation de la classe
module.exports = class detectUser extends User {

    static match(message) {
        return message.author.username
    }

    static action(message) {
        // détection d'utilisateur

        const charlemagneReply = [
            'Ta gueule bro, t\'sers à rien t\'façons ... :middle_finger:',
            'Useless...',
            'https://tenor.com/view/ferme-ta-gueule-ta-gueule-ferme-la-ftg-tg-gif-5034386',
            'https://tenor.com/view/tbag-gif-13787081'
        ]
        let randomInt = User.randomNumber(0, 3)
        message.reply(charlemagneReply[randomInt])
        message.react('🖕')
        if (message.author.username == 'RubyCouz') {
            message.delete({
                reason : 'Tu mérites pas'
            })
        }
    }
}