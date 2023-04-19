const express = require('express')
const user = require('./controllers/users')
const app = express()
const cors = require('cors')

app.listen(4000, (req, res)=>{
    console.log("its workingg")
})
app.use(cors({origin : '*'}))

app.get('/', (req, res)=>{
    res.send("its working")
})
app.use(express.json())

app.use('/user', user)