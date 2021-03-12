// appel de la librairie discord.js
const Discord = require('discord.js')
// instantion disocrd
const bot = new Discord.Client()
// instanciation XMLHTTPRequest => ajax
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// définition de l'activité du bot
bot.on('ready', function () {
    bot.user.setActivity('Trash Talk').catch(console.error)
})

// let str = location.pathname
// let url = str.split('/')

let date = new Date()
let hour = date.getHours()
let min = date.getMinutes()

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

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
    const correctReply = [
        'https://tenor.com/view/eyes-burning-my-eyes-spongebob-gif-5183364',
        'https://tenor.com/view/bescherelle-pulp-fiction-gif-11854215',
        'https://tenor.com/view/kamehameha-goku-kamehamehapprends-ecrire-bescherelle-gif-18324174',
        'https://tenor.com/view/bescherelle-orthographe-gif-15543456',
        'https://tenor.com/view/bescherelle-militaire-bescherelle-power-throw-army-gif-17625121'
    ]
    let url = 'http://127.0.0.1:8000/readFile.php'
    ajax(url, message.content)
        .then(function (result) {
        console.log(result)
            if(result !== '0') {
                if(!message.author.bot) {
                    let randomInt = randomNumber(0, 4)
                    message.reply(correctReply[randomInt])
                }
            }
    })
        .catch(function() {
            console.log('erreur')
        })



    // xhr.onreadystatechange = function () {
    //     if (xhr.readyState === 4 && (xhr.status === 200 || xhr.status === 0)) {
    //         console.log(xhr.response)
    //         if (xhr.response != 0) {
    //             if (!message.author.bot) {
    //                 message.reply('faux')
    //             }
    //         }
    //         // alert(xhr.responseText); // Données textuelles récupérées
    //     }
    // }

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
    // recherche de différents mots dans le message
    let mom = message.content.search(/mère|daronne|maman|ntm/i)
    let raid = message.content.search(/raid|tryhard|try hard/i)
    let cheh = message.content.search(/cheh|fail|échec|raté/i)
    let painAuChocolat = message.content.search(/chocolatine/i)
    let noob = message.content.search(/noob/i)
    let ehpad = message.content.search(/ehpad/i)
    let rage = message.content.search(/alt\+f4|rage|ragequit|altf4|zatox|sel/i)

    if (mom !== -1) {
        if (!message.author.bot) {
            message.reply('Ah noooon... On a dit : "pas les mamans !!!')
        }
    }
    // si le mot 'raid' est dans le message
    if (raid !== -1) {
        if (!message.author.bot) {
            message.channel.send('https://tenor.com/view/raid-destiny-seagull-gif-19244751')
        }
    }
    // si "cheh" est dans le messsage
    if (cheh !== -1) {
        const chehReply = [
            'cheh',
            'CHEH !!!',
            'Un gros CHEH dans ta gueule !!!',
            'https://tenor.com/view/nelson-monfort-i-hear-che-in-my-oreillette-smile-happy-gif-16762248',
            'https://tenor.com/view/cheh-bienfaits-duh-gif-12323680',
            'https://tenor.com/view/cheh-bien-fait-deserve-deserves-what-she-deserves-gif-11935657'
        ]
        if (!message.author.bot) {
            let randomInt = randomNumber(0, 5)
            message.channel.send(chehReply[randomInt])
        }
    }
    // si "noob" est dans le message
    if (noob !== -1) {
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
            let randomInt = randomNumber(0, 7)
            message.channel.send(noobMess[randomInt])
        }
    }
// si le mot "chocolatine" est dans le message
    if (painAuChocolat !== -1) {
        const chocolatineMess = [
            'On dit "pain au chocolat", connard !!!',
            'Nope, essaie encore : PAIN AU CHOCOLAT',
            'Encore un effort : PAIN AU CHOCOLAT', 'Inculte...'
        ]
        let randomInt = randomNumber(0, 3)
        message.reply(chocolatineMess[randomInt])
    }

    if (ehpad !== -1) {
        message.reply('Couz t\'emmerde, branleur :middle_finger: !!!')
        message.react('🖕')
    }

    if (rage !== -1) {
        const rageMess = [
            'Attend, j\'appelle @Zatox#1891...',
            '@Zatox#1891, on te pique ta technique',
            'Ouais, va pas casser ta manette !!!',
            'https://tenor.com/view/mohamed-henni-bloger-fan-de-om-fan-de-marseille-youtuber-gif-12597020',
            'https://tenor.com/view/mohamed-henni-nul-gif-13266143'
        ]
        if (!message.author.bot) {
            let randomInt = randomNumber(0, 4)
            message.channel.send(rageMess[randomInt])
        }
    }


})
// login du bot, à décommenter avant mise en prod
// bot.login(process.env.token)

// key dev, à supprimer avant mise en prod
bot.login('ODE4ODE4NjA5Nzc3ODY4ODQw.YEdmQQ.ZHJaug2W5vjtlXkK4ECQomUHRL0')


