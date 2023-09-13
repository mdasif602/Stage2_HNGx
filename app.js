const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb://localhost/perdb'
const app = express();

mongoose.connect(url, {useNewUrlParser: true})

const con = mongoose.connection;

con.on('open', () =>{
  console.log('Connected to database')
})

app.use(express.json())

const personRouter = require('./routes/persons')

app.use('/api', personRouter)

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
