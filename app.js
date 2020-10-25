const validator = require('validator');

var arrays = ['toto@SpeechGrammarList.com', 'toto@gmail.com', 'nonvalide@valide..com', 'machine@toto.fr', 'biblo@net.www'];

arrays.forEach(function(array) {
    if (validator.isEmail(array) == true ) {
        console.log(array + ' : ok');
    } else {
        console.log(array + ' : ko');
    }
});