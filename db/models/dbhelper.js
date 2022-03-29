const knex = require('knex')
const config = require('../knexfile')
const db = knex(config.development)

//Add a book
async function add(food){
    let convertedTimeToCook = 0;
    //add random timer if user hasn't given between 5-15
    if(food.time_to_cook === undefined){
        let randomCookTime = Math.floor(Math.random() * (15 - 5 + 1) + 5)
        convertedTimeToCook = randomCookTime * 60;
    } else{
        //convert to seconds before adding into db
        convertedTimeToCook = food.time_to_cook * 60;
    }
    const updatedFood = {table_number: food.table_number, food: food.food, time_to_cook: convertedTimeToCook}
    await db("orders").insert(updatedFood);
}

//Get all orders
async function getAllFood(){
    let allOrders = await db("orders")
    return allOrders
}


//The application MUST, upon query request, show a specified item for a specified table number.

//The application MUST, upon query request, show all items for a specified table number.

//The application MUST, upon deletion request, remove a specified item for a specified table number.

module.exports = {add, getAllFood}