const express = require('express')
const cors = require('cors')
const { transporter } = require('./app/config/NodeMailer')
const { mailController } = require('./app/config/controllers/MailController')
const app = express()
app.use(express.json())
app.use(cors())

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';


app.post('/submitEnquiry',mailController)




app.listen(process.env.PORT)