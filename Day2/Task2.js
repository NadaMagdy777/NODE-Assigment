const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: fs.createReadStream('greet.txt'),
    crlfDelay: Infinity
});

rl.on('line',function(line){
    console.log(line)
})
