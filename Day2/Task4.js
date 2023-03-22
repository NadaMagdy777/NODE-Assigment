var fs = require('fs');

fs.unlink('info.txt', function (err) {
  if (err) throw err;
  console.log('complete delete file');
});