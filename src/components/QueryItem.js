import axios from 'axios'
import React from 'react'
import { useState } from 'react'

export const QueryItem = ({setState}) => {
  const [foodOrder, setFoodOrder] = useState('')
  const [foodOrderTable, setFoodOrderTable] = useState('')
  let retrievedObj = {};

    const onSubmit = (e) => {
        e.preventDefault()
    
        if (!foodOrder) {
          alert('Please add a food item to search')
          return
        }
        if (!foodOrderTable) {
            alert('Please add a table number to search')
            return
          }
          axios.get(`/api/foods/${foodOrderTable}/${foodOrder}`).then((data) => retrievedObj = {table_number : data.data[0].table_number, food : data.data[0].food})
          .then(()=> {alert(`Table number: ${retrievedObj.table_number}  Food item: ${retrievedObj.food}`)})
    }

    return (
      <div>
          <h1>PLACE QUERY ORDER</h1>
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
  