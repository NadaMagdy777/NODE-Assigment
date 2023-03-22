var fs = require('fs');


// Read file Sync


var content = fs.readFileSync('data.json', 'utf8')
console.log(content)


//read file Async



fs.readFile("data.json", "utf-8", (err, data) => {
     if (err) {
         console.log(err);
     }
     else{
         console.log(data);
    }
 });



