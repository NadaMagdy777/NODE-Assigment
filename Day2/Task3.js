var fs = require('fs');

//Create test file with dummy data
fs.appendFile('test.txt', 'Test File', function (err) {
  if (err) throw err;
  console.log('complete save file');
});

//Rename file from test.txt to info.txt
fs.rename('test.txt', 'info.txt', function (err) {
  if (err) throw err;
  console.log('complete rename file');
});