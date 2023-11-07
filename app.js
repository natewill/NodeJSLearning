var express = require('express')
var app = express('express')
var bodyParser = require('body-parser');

data = []
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.set('view engine', 'ejs')
app.use('/public' ,express.static('public'))

app.get('/', function(req, res){ 
  res.render('prototype1')
})

app.post('/', function(req, res) {
  data = []
  numberOfLines = req.body.number
  for(i=0; i<=parseInt(numberOfLines[numberOfLines.length -1]); i++){
    textFont = "req.body.text" + i
    eval("var datapush" + " = " + textFont)
    if(datapush){data.push(datapush)}
    data.push(req.body.texta[i])
}
  res.redirect('/answer')
});

app.get('/answer', function(req, res){
  res.render('answer', {data: data})
})

app.listen(3000)
console.log('Now listening to port 3000')
