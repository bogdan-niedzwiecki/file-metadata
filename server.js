var express = require('express');
var cors = require('cors');
require('dotenv').config()
var bodyParser = require("body-parser")
var app = express();
var multer = require('multer');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/fileanalyse', multer().single('upfile'), function (req, res) {
  res.json({
    name: req.file.originalname,
    type: req.file.mimetype,
    size: req.file.size,
  })
})

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
