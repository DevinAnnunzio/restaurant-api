const foodItemDAO = require('../dao/foodItem')

class FoodItemService{
    createFoodItem(foodItemDto){
        const{tableNumber, food} = foodItemDto
        return foodItemDAO.createFoodItem(tableNumber, food);
    }

}

module.exports = new FoodItemService();


//24:20

//Service layer has logic and knows what to do.  Delegates to DAO