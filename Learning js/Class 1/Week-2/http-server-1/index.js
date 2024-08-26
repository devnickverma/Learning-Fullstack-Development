const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const port = 3000

app.use(bodyParser.json());

app.post('/post', function(req, res) {
    const message = req.body.message;
    console.log(message);
    res.json({
        output : " 2 + 2 = 8 "
    })
})
app.get('/', function(req, res) { 
  res.send('Hello World!')
})

app.listen(port) 