var express = require('express');
var exphbs = require('express-handlebars');

var app = express();
var port = process.env.PORT || 3000;
var invisibleOptionsContent = require('./invisibleOptions.json');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.status(200).render('homePage', {
    invisibleOptions: invisibleOptionsContent,
    benny: true,
    hess: false
    });
});

app.get('/game/audio/breakfast.ogg', function (req, res) {
  res.sendFile(__dirname + "/public/audio/breakfast.ogg");
});

app.get('/game/:n', function (req, res, next) {
  var n = req.params.n;
  
  if (n == "benny") {
    res.status(200).render('gamePage', {
      photo: "https://i.imgur.com/Ij3d92I.png",
      source: "audio/breakfast.ogg",
      type: "audio/ogg"
      });
    
  }
  else if (n == "hess") {
    res.status(200).render('gamePage', {
      photo: "https://i.imgur.com/TSb8oI5.png",
      source: "audio/breakfast.ogg",
      type: "audio/ogg"
    });
    
  }
  else {
    next();
  }
});

app.get('*', function (req, res) {
  res.status(404).render('404');
});

app.listen(port, function () {
  console.log("== Server is listening on port", port);
});

