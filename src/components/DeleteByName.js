import React from 'react'
import axios from 'axios'
import { useState } from 'react'

export const DeleteByName = ({setState, getAllOrders}) => {
    const [foodOrder, setFoodOrder] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
    
        if (!foodOrder) {
          alert('Please add a food item')
          return
        }
          axios.delete('/api/foods', {
            headers: {
              
            },
            data: {
              food: foodOrder
            }
          }).then(() => getAllOrders())
    }
  return (
    <div>
        <h1>Delete a food item by name</h1>
        <form onSubmit={onSubmit}>
      <div>
        <label>Food</label>
        <input
          placeholder='Add food name to delete'
          value={foodOrder}
          onChange={(e) => setFoodOrder(e.target.value)}
        />
        </div>
        
        <input type='submit' value='Submit to delete'/>
        </form>
        <button onClick={()=>setState("allorders")}>Show all orders</button>
    </div>
  )
}
