const express  = require('express')
const serveStatic   = require('serve-static')
const path      =   require('path')

const app   = express()

app.use('/',serveStatic(path.join(_dirname,'/dist')))

const port = process.env.port || 8080
app.listen(port)
