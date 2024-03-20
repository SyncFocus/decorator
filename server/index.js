const mongoose = require('mongoose');
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')


const dataB = 'mongodb+srv://majisubhajit644:Cbi6tcLYutydiGLI@decorator.fve8zbz.mongodb.net/?retryWrites=true&w=majority&appName=decorator'

mongoose.connect(dataB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    appName: 'Catalogue'
  }).then(() => {
    console.log("Connection Successful");
  }).catch((err) => console.log("No connection: ", err));

const db = mongoose.connection

db.on('error',()=>{
    console.log("No such database exizt")
})

db.once('open',()=>{
    console.log('connected to databse')
})

// const collectionName = 'your_collection_name';
//     await db.createCollection('catalogue');
//     console.log(`Collection "${collectionName}" created successfully`)
const app = express();

const PORT = process.env.PORT || 8000;

app.use(bodyParser.json())
// app.use(cors({ origin: '*' }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use('/api/decorator',require('./routes/decorator'))
app.listen(PORT,()=>{
    console.log("App is listening")
})


