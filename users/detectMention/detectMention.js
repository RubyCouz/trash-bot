const Mention = require('./mention')
// exportation de la classe
module.exports = class detectMention extends Mention {

    static match(message) {
        return message.author.username
    }

    static action(message) {
        let date = new Date()
        let hour = date.getHours()
        let min = date.getMinutes()
        message.mentions.users.forEach(
            function (element) {
                if (element.username === 'Trash talk Bot') {
                    if (!message.author.bot) {
                        message.reply('Me parle pas, noob !!!')
                        message.react('🖕')
                    }
                }
                if (element.username === 'RubyCouz' || element.username === 'Melyla') {
                    if (!message.author.bot) {
                        message.reply('Attention comment tu parles au chef !!!')
                    }
                }
                if (element.username === 'PsYc0p4t10uS') {
                    if (!message.author.bot) {
                        if (date.getHours() === 21 && (date.getMinutes() <= 30)) {
                            message.channel.send('https://tenor.com/view/judge-judy-times-up-what-time-is-it-gif-5714654')
                        }
                    }
                }
            }
        )
    }
}