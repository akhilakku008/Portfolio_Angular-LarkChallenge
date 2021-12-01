const express = require('express')
const cors = require('cors')
const port = process.env.PORT || 2000
const app = express()
const testinomydata = require('./model/testinomialData')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', function (req, res) {
    res.send(`<center><h2>Server is working</h2></center>`)
})

app.get('/review', function (req, res) {
    testinomydata.find().then(function (data) {
        res.send(data)
    })

})

app.listen(port,() => {
   console.log("Server is ready at"+port) 
})