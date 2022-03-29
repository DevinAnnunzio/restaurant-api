import axios from 'axios'
import React from 'react'
import { useState } from 'react'


export const PlaceOrder = ({setState, getAllOrders}) => {
    const [foodOrder, setFoodOrder] = useState('')
    const [foodOrderTable, setFoodOrderTable] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
    
        if (!foodOrder) {
          alert('Please add a food item')
          return
        }
        if (!foodOrderTable) {
            alert('Please add a table number')
            return
          }
          axios.post('/api/foods',{table_number: foodOrderTable, food: foodOrder}).then(() => getAllOrders())
    }
  return (
    <div>
        <h1>PLACE ORDER</h1>
        <form onSubmit={onSubmit}>
      <div>
        <label>Food</label>
        <input
          placeholder='Add food'
          value={foodOrder}
          onChange={(e) => setFoodOrder(e.target.value)}
        />
        </div>
        <div>
        <label>Table</label>
        <input
          placeholder='Add table number'
          value={foodOrderTable}
          onChange={(e) => setFoodOrderTable(e.target.value)}
        />
        </div>
        <input type='submit' value='Submit Order'/>
        </form>
        <button onClick={()=>setState("allorders")}>Show all orders</button>
    </div>
  )
}
