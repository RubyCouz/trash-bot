module.exports = class Corrector {

    static parse(message) {
        if (this.match(message)) {
            this.action(message)
            return true
        } else {
            return false
        }
    }

    static match(message) {
        return false
    }

    static actions(message) {

    }

    static randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    static ajax(url, message) {

// instanciation XMLHTTPRequest => ajax
        const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
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
}