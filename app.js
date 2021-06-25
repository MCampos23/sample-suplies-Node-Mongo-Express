const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')


//Routes
const customers = require('./routes/customers')
const sales = require('./routes/sales')
app.use("/customers", customers)
app.use("/sales", sales)


mongoose.connect('mongodb+srv://shop-user:shop-user@cluster0.qzmc8.mongodb.net/sample_supplies?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
var db = mongoose.connection

db.on('error', function(err){
  console.log('connection error', err)
})

db.once('open', function(){
  console.log('Connection to DB successful')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})