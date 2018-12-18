import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(morgan('dev'))

const PORT = process.env.PORT || 0
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`)
})
