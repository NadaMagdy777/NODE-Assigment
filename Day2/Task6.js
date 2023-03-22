var fs = require('fs');


fs.writeFile('info.txt', 'hello iti', (err) => {
    if (err) throw err;
    console.log('The file content updated');
});



