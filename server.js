const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())
//app.set('port', (process.env.PORT || 8080))

// Static page calling, below comment will call the static pages
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/intro', function(req, res){
  var speech = req.body.result && req.body.result.parameters && req.body.result.parameters.userName ? req.body.result.parameters : "Seems like some problem. Try again"
  return res.json({
    speech : speech,
    displayText : speech,
    source : 'webhook-echo-sample'
  });

});




app.get('/intro', function (req, res) {
  const userName = req.query.userName
  console.log(req.hostname)
  console.log('URL '+req.originalUrl)
  console.log('Query '+req.query)
  console.log(req.body)
  //var userName = req.body.result.parameters['userName']
  var webhookReply = 'Hello ' + userName + '! Welcome from the webhook.'

  res.send(webhookReply)
})



app.listen(process.env.PORT || 8080, () => console.log('All is OK'))
