require('dotenv').config();
require('@babel/register');
const express = require('express');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const app = express()

const movieRouter = require('./src/routes/api/v1/movie.routes')

const {
    PORT, CLIENT_PORT,
} = process.env;

const corsOptions = {
    origin: [`http://localhost:${CLIENT_PORT}`],
    optionsSuccesStatus: 200,
    credentials: true,
};

app.use(cors(corsOptions))
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static(path.join(process.cwd(), 'public/')))

app.use('/api/v1/movie', movieRouter)

app.listen(PORT, () => {
    console.log(`Сервер запущен на ${PORT} порту`)
})