// appel de la librairie discord.js
const Discord = require('discord.js')
// instantion disocrd
const bot = new Discord.Client()
// instanciation XMLHTTPRequest => ajax
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const Noob = require('./filters/noob')
const Mom = require('./filters/mom')
const Raid = require('./filters/raid')
const Cheh = require('./filters/cheh')
const Chocolate = require('./filters/painAuChocolat')
const Ehpad = require('./filters/ehpad')
const Zatox = require('./filters/zatox')
// définition de l'activité du bot
bot.on('ready', function () {
    bot.user.setActivity('Trash Talk').catch(console.error)
})

// let str = location.pathname
// let url = str.split('/')

let date = new Date()
let hour = date.getHours()
let min = date.getMinutes()


function ajax(url, message) {
    return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest()
        xhr.onload = function () {
            resolve(this.responseText)
        }
        xhr.onerror = reject
        xhr.open('POST', url, true)
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
        xhr.send('value=' + message)

    })
}

// analyse des messages
bot.on('message', function (message) {

    Noob.parse(message)
    Mom.parse(message)
    Raid.parse(message)
    Cheh.parse(message)
    Chocolate.parse(message)
    Ehpad.parse(message)
    Zatox.parse(message)
    const correctReply = [
        'https://tenor.com/view/eyes-burning-my-eyes-spongebob-gif-5183364',
        'https://tenor.com/view/bescherelle-pulp-fiction-gif-11854215',
        'https://tenor.com/view/kamehameha-goku-kamehamehapprends-ecrire-bescherelle-gif-18324174',
        'https://tenor.com/view/bescherelle-orthographe-gif-15543456',
        'https://tenor.com/view/bescherelle-militaire-bescherelle-power-throw-army-gif-17625121'
    ]
    // url dev
    // let url = 'http://127.0.0.1:8000/readFile.php'
    // url prod
    let url = 'https://dicoapi.herokuapp.com/readFile.php'
    ajax(url, message.content)
        .then(function (result) {
            if (result !== '0') {
                if (!message.author.bot) {
                    let randomInt = randomNumber(0, 4)
                    message.reply(correctReply[randomInt])
                }
            }
        })
        .catch(function () {
            console.log('erreur')
        })


// détection de mention d'utilisateur
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
    // détection d'utilisateur
    if (message.author.username === 'Charlemagne' || message.author.username === 'MEE6') {
        const charlemagneReply = [
            'Ta gueule bro, t\'sers à rien t\'façons ... :middle_finger:',
            'Useless...',
            'https://tenor.com/view/ferme-ta-gueule-ta-gueule-ferme-la-ftg-tg-gif-5034386',
            'https://tenor.com/view/tbag-gif-13787081'
        ]
        let randomInt = randomNumber(0, 3)
        message.reply(charlemagneReply[randomInt])
        message.react('🖕')
    }



})
// login du bot, à décommenter avant mise en prod
// bot.login(process.env.token)

// key dev, à supprimer avant mise en prod
bot.login('ODE4ODE4NjA5Nzc3ODY4ODQw.YEdmQQ.n6-eBzEgDbdWGYOJ96t3gmrahsQ')

