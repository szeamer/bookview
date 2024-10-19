const  {insertSentence}  = require('./db/sentences');
const fs = require('fs');

function load_text() {
    const data = fs.readFileSync('./uploads/hp_svenska.txt', 'utf-8');
    line_list = data.split(/\r?\n/).filter(line => line.trim() != '');
    for (let i = 0; i < line_list.length; i++) {
        console.log(line_list[i]);
        insertSentence(line_list[i], i);
    }
    
    return line_list;
}

module.exports = load_text;
