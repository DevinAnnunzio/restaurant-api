const dotenv = require("dotenv").config();
const express = require('express')
const app = express();
const knex = require('knex')
const cors = require('cors')
const PORT = process.env.PORT || 8000;

const Orders = require('./db/models/dbhelper')


//json parsing middleware
app.use(cors())
app.use(express.json())
app.use(express.static(__dirname + '/build'));


app.get('/', (req, res) => {
    res.send("Oh no")
})

//******************************************* ************************ ******************* */
//Add a food item 
app.post('/api/foods', (req, res) => {
    try {
        Orders.add(req.body)
            .then(item => { res.status(201).json(item) })
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

//Remove an item from table by food name
app.delete('/api/foods',(req,res) =>{
    try {
        Orders.deleteOrder(req.body)
        .then(item => {res.status(200).json(item)})
    } catch (error) {
        res.status(500).json({ message: 'Can not delete food item' })
    }
})

//The application MUST, upon query request, show a specified item for a specified table number.
app.get('/api/foods/:table',(req,res) => {
    try {
        let foodObj = {table: req.params.table, food: req.body.food}
        Orders.getItemAtTable(foodObj)
        .then(item => { res.status(201).json(item) })
    } catch (error) {
        res.status(500).json({ message: 'Can not query food item' })
    }
})

//The application MUST, upon query request, show all items for a specified table number.
app.get('/api/tables', (req,res) => {
    try {
        Orders.getAllItemsAtTable(req.body)
        .then(orders => {res.status(200).json(orders)});
    } catch (error) {
        res.status(500).json({ message: 'Can not get orders from table requested' })
    }
})


//******************************************** ************************ ************************ ****************** */
//The application MUST, upon deletion request, remove a specified item for a specified table number.
app.delete('/api/foods/:table', (req,res) => {

    let foodObj = {table: req.params.table, food: req.body.food}
    try {
        Orders.deleteItemAtTable(foodObj)
        .then(item => {res.status(200).json(item)})
    } catch (error) {
        res.status(404).json({ message: 'Can not delete food item requested at table' })
    }
})





app.listen(PORT, ()=> console.log(`Listening on ${PORT} ohhh yeahhhhhhh`))
