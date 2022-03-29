
//abstract away database access
//Suppose to abstract everything away
const db = require('../db/db')

class FoodItemDAO{
    async createFoodItem(tableNumber, food){
        const [order_id] = await db('paidy').insert({
            table_number: tableNumber,
            food: food,
        })
        .returning('order_id')

    }
}

module.exports = new FoodItemDAO();