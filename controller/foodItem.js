//Not supposed to know db layer
//Only responsible for request then giving it to the service.  If any error, let's you know
const FoodItemService = require('../service/foodItem')
class FoodController{
    async createFood(req,res){
        try {
            const orderId = await FoodItemService.createFoodItem(req.body);
            res.status(201).json(orderId);

            
        } catch (error) {
            res.send(`Error is: ${error}`)
        }

    }
}

module.exports = new FoodController();