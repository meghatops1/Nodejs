var fs = require('fs');

fs.rename('hello.html', 'first.html', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});