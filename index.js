const express = require('express')
const app = express();
const knex = require('knex')
const cors = require('cors')
const PORT = 8000

const Orders = require('./db/models/dbhelper')


//json parsing middleware
app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
    res.send("Oh no")
})

//Add a food item 
app.post('/api/food', (req, res) => {
    try {
        Orders.add(req.body)
            .then(item => { res.status(200).json(item) })
    } catch (error) {
        res.status(500).json({ message: 'Can not add food item' })
    }
})

//Get all food items
app.get('/api/allorders', (req,res) => {
    try {
        Orders.getAllFood()
        .then(orders => {res.status(200).json(orders)});
    } catch (error) {
        res.status(500).json({ message: 'Can not get all orders' })
    }
})

//The application MUST, upon query request, show a specified item for a specified table number.

//The application MUST, upon query request, show all items for a specified table number.

//The application MUST, upon deletion request, remove a specified item for a specified table number.





app.listen(PORT, ()=> console.log(`Listening on ${PORT} ohhh yeahhhhhhh`))
