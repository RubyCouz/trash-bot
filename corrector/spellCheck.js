const Corrector = require('./corrector')
// exportation de la classe
module.exports = class SpellCheck extends Corrector {

    static match(message) {
        return message.content
    }

    static action(message) {
        const correctReply = [
            'https://tenor.com/view/eyes-burning-my-eyes-spongebob-gif-5183364',
            'https://tenor.com/view/bescherelle-pulp-fiction-gif-11854215',
            'https://tenor.com/view/kamehameha-goku-kamehamehapprends-ecrire-bescherelle-gif-18324174',
            'https://tenor.com/view/bescherelle-orthographe-gif-15543456',
            'https://tenor.com/view/bescherelle-militaire-bescherelle-power-throw-army-gif-17625121'
        ]
        // url dev
        let url = 'http://127.0.0.1:8000/readFile.php'
        // url prod
        // let url = 'https://dicoapi.herokuapp.com/readFile.php'
        Corrector.ajax(url, message.content)
            .then(function (result) {
                // console.log(result)
                if (result != 0) {
                    console.log('result : ' + result)
                    if (!message.author.bot) {
                        let randomInt = Corrector.randomNumber(0, 4)
                        message.reply(correctReply[randomInt])
                    }
                }
            })
            .catch(function () {
                console.log('erreur')
            })
    }
}