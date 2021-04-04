const palindromes = function(text) {

let reversed1 = text.replace(/[. ,!]/g,'').toLowerCase()
let reversed2 = text.replace(/[. ,!]/g,'').toLowerCase().split('').reverse().join('')

    if (reversed1===reversed2) {
        return true}
    else {
        return false}

    
    }

palindromes('A car, a man, a maraca.')

module.exports = palindromes
