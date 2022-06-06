const express = require('express')
const dotenv = require('dotenv/config')
const reportRouter = require('./Routers/report')

let PORT = process.env.STATUS === 'development' ? (process.env.DEV_PORT) : ""





const app = express()





app.use(express.json());
app.use("/reports", reportRouter)






app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
})

