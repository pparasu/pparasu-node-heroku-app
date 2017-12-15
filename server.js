const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())
//app.set('port', (process.env.PORT || 8080))

// Static page calling, below comment will call the static pages
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/intro', function(req, res) {
    var speech = req.body.result && req.body.result.parameters && req.body.result.parameters.echoText ? req.body.result.parameters.echoText : "Seems like some problem. Speak again."
    return res.json({
        speech: speech,
        displayText: speech,
        source: 'webhook-echo-sample'
    });
});

app.listen(process.env.PORT || 8080, () => console.log('All is OK'))
