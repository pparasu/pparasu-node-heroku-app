const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())
app.set('port', (process.env.PORT || 8080))

// Static page calling, below comment will call the static pages
//app.use(express.static('public'))

app.get('/', function (req, res) {
  //res.send('Use the /webhook endpoint.')
})

app.post('/intro', function (req, res) {
  // we expect to receive JSON data from api.ai here.
  // the payload is stored on req.body
  console.log(req.body)


  //const userName = req.query.userName
  var userName = req.body.result.parameters['userName']
  var webhookReply = 'Hello ' + userName + '! Welcome from the webhook.'


  // the value of Action from api.ai is stored in req.body.result.action
//  console.log('* Received action -- %s', req.body.result.action)

  // parameters are stored in req.body.result.parameters
//  var userName = req.body.result.parameters['given-name']
//  var webhookReply = 'Hello ' + userName + '! Welcome from the webhook.'

  // the most basic response
  res.status(200).json({
    source: 'intro',
    speech: webhookReply,
    displayText: webhookReply
  })
})


app.listen(process.env.PORT || 8080, () => console.log('All is OK'))
