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

app.get('/you_goodluck', function (req, res) {
  res.sendFile('public/documents/classresources/you_goodluck.png', { root: __dirname });
})
app.get('/you_lose', function (req, res) {
  res.sendFile('public/documents/classresources/you_lose.png', { root: __dirname });
})
app.get('/you_win', function (req, res) {
  res.sendFile('public/documents/classresources/you_win.png', { root: __dirname });
})

app.get('/dice1', function (req, res) {
  res.sendFile('public/documents/classresources/dice1.png', { root: __dirname });
})
app.get('/dice2', function (req, res) {
  res.sendFile('public/documents/classresources/dice2.png', { root: __dirname });
})
app.get('/dice3', function (req, res) {
  res.sendFile('public/documents/classresources/dice3.png', { root: __dirname });
})
app.get('/dice4', function (req, res) {
  res.sendFile('public/documents/classresources/dice4.png', { root: __dirname });
})
app.get('/dice5', function (req, res) {
  res.sendFile('public/documents/classresources/dice5.png', { root: __dirname });
})
app.get('/dice6', function (req, res) {
  res.sendFile('public/documents/classresources/dice6.png', { root: __dirname });
})
app.get('/appscreenshot', function (req, res) {
  res.sendFile('public/documents/classresources/appscreenshot.png', { root: __dirname });
})
