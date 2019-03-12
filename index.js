const config = require('./config/config.json')
const twilio = require('twilio')
const client = new twilio(config.accountSid, config.authToken)

const to = '+1' + process.argv[2]

console.log('Calling ' + to + '...')

var promise = client.calls.create({
    url: config.xmlUrl,
    to: to,
    from: config.from,
    recording: true
})

promise.then(call => {
    console.log('Call completed: ' + call.sid)
}), (error) => {
    console.error(error)
}