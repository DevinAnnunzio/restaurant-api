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
    const updatedFood = {table_number: food.table_number, food: food.food.toLowerCase(), time_to_cook: convertedTimeToCook}
    await db('orders').insert(updatedFood);
}

//Get all orders
async function getAllFood(){
    let allOrders = await db('orders')
    return allOrders
}

//****************************************************************************** */
//Update cook times
async function updateAllCookTimes(){
    let allOrders = await db('orders');
    allOrders.forEach((item) => {
        //dateHours converted to seconds;
        let dateHours = item.created_at.getHours() * 3600;
        //dateMinutes converted to seconds
        let dateMinutes = item.created_at.getMinutes() * 60;
        //Total time + cook time in seconds
        let totalCookTime = dateHours + dateMinutes + item.time_to_cook

        let currentTime = new Date();
        //converted to seconds
        let currentHours = currentTime.getHours() * 3600;
        //converted to seconds
        let currentMinutes = currentTime.getMinutes() * 60;
        let totalCurrentTime = currentHours + currentMinutes;
        if(totalCookTime <= totalCurrentTime){
            //Call  to change db cooked to true
            changeToCooked(item.order_id);
        }
    })

}
//****************************************************************************** */
//Change item to cooked if cook time is finished
async function changeToCooked(item){
    await db('orders').where({order_id: item}).update({cooked: true})
}


async function deleteOrder(order){
    //Conv to lower case to better match item
    let item = order.food.toLowerCase()
    let obj = {food:item}
    await db('orders').del().where({food:obj.food})
}


//The application MUST, upon query request, show a specified item for a specified table number.
async function getItemAtTable(item){
    let orderRequested = await db('orders').select('table_number', 'food' ).where({table_number: item.table, food: item.food.toLowerCase()})

    return orderRequested;
}

//The application MUST, upon query request, show all items for a specified table number.
async function getAllItemsAtTable(item){
    let orderRequested = await db('orders').select('food', 'order_id').where({table_number: item})
    return orderRequested;
}

//The application MUST, upon deletion request, remove a specified item for a specified table number.
async function deleteItemAtTable(item){
    await db('orders').del().where({table_number: item.table, food: item.food.toLowerCase()})
}

module.exports = {add, getAllFood, deleteOrder, deleteItemAtTable, getItemAtTable, getAllItemsAtTable, updateAllCookTimes}