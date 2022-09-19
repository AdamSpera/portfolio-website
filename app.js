var express = require('express');
var app = express();

app.use(express.static('public'));
var server = app.listen(80, function () {
  console.log('Server is listening on port 80');
})

app.get('/', function (req, res) {
  console.log(`[/]: Get request received at '/'`);
  res.sendFile('public/index.html', { root: __dirname });
})

app.get('/scriptswitch', function (req, res) {
  console.log(`[/scriptswitch]: Get request received at '/scriptswitch'`);
  res.sendFile('public/documents/EasyInstall.zip', { root: __dirname });
})
