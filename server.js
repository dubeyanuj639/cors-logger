const expres = require('express')
const app = expres()
const cors = require('cors');
const morgan = require('morgan');
let port = 9000
/* To Enable cross origin */
app.use(cors())
/* To Get Logs */
app.use(morgan('combined'))
app.listen(port, (req, res) => {
    console.log("Server Connectd On port ==>", port)
})
/* hit the call from postman and get the logs */
app.get('/check', (req, res) => {
    console.log("req ==>")
})
