// appel de la librairie discord.js
const Discord = require('discord.js')
// instantion disocrd
const bot = new Discord.Client()

const Noob = require('./filters/noob')
const Mom = require('./filters/mom')
const Raid = require('./filters/raid')
const Cheh = require('./filters/cheh')
const Chocolate = require('./filters/painAuChocolat')
const Ehpad = require('./filters/ehpad')
const Zatox = require('./filters/zatox')
const SpellCheck = require('./corrector/spellCheck')
const DetectUser = require('./users/detectUsers/detectUser')
const DetectMention = require('./users/detectMention/detectMention')
const DelRiku = require('./users/detectUsers/delRiku')
// définition de l'activité du bot
bot.on('ready', function () {
    bot.user.setActivity('Trash Talk').catch(console.error)
})

// let str = location.pathname
// let url = str.split('/')


// analyse des messages
bot.on('message', function (message) {

    Noob.parse(message)
    Mom.parse(message)
    Raid.parse(message)
    Cheh.parse(message)
    Chocolate.parse(message)
    Ehpad.parse(message)
    Zatox.parse(message)
    SpellCheck.parse(message)
    DetectUser.parse(message)
    DetectMention.parse(message)
    DelRiku.parse(message)
})
// login du bot, à décommenter avant mise en prod
// bot.login(process.env.token)

// key dev, à supprimer avant mise en prod
bot.login('ODE4ODE4NjA5Nzc3ODY4ODQw.YEdmQQ.JJzJfqRAN2fSZoEvJGyP2Fxcs3I')
