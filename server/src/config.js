import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import router from './routes/index.routes.js'

const app = express()
app.use(
  cors({
    origin: '*',
    methods: 'GET, POST, PUT, DELETE',
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  })
)
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/', router)

export default app