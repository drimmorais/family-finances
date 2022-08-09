import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import http from 'http'

import ApiV1Router from './src/routes/ApiV1'
import ErrorHandler from './src/util/errorHandler'

dotenv.config()

mongoose.connect('mongodb://localhost:27017/conShare')
    .then(() => {
        console.log('conShare Database is connect')
    })

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/v1', ApiV1Router)
app.use(ErrorHandler.handle)

const port = process.env.PORT || 8080

http.createServer(app).listen(port, () => {
    console.log(`Http server started. Port ${port} `)

})


