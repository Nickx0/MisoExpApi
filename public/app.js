const express = require('express');
const cors = require('cors')
const app = express();
//settings
app.set('port', process.env.PORT || 4000);
//middlewares
app.use(cors());
app.use(express.json());
//routes
app.use('/api/v1/clicks', require('./routes/clicks'))
app.use('/api/v1/files',require('./routes/files'))
app.use('/api/v1/subs',require('./routes/subs'))
module.exports = app;
