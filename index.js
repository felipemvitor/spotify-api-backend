require('dotenv').config()

const restify = require('restify')

const PORT = process.env.PORT || 3000

var server = restify.createServer()
server.use(restify.plugins.bodyParser())

server.listen(PORT, () => {
    console.log(`Server running at port: ${PORT}`)
})