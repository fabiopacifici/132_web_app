const express = require('express');
const server = express();
const BooksRouter = require('./routes/books');
const NotFound = require('./middlewares/NotFound')
const ServerErrorsHandler = require('./middlewares/ServerErrorsHandler')
const cors = require('cors')

const corsOptions = {
  origin: process.env.WEB_APP_FRONT_ORIGIN,
  optionsSuccessStatus: 200
}

server.use(express.json())
server.use(cors(corsOptions));


const HOST = process.env.HOST || 'http://localhost';
const PORT = process.env.PORT || '3001';

// Routes 
server.get('/', (req, res) => {
  res.send(`Server is up and running!`);
})

// Books Routes 
server.use('/api/books', BooksRouter);


// (middleware) handle 404 errors with a catch all route
server.use(NotFound)


// (middleware) handle all 500 errors 
server.use(ServerErrorsHandler)


server.listen(PORT, () => {
  console.log(`Server is listening on port ${HOST}:${PORT}`);
})
