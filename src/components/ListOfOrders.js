import axios from 'axios'
import React from 'react'
import {FaTrash} from 'react-icons/fa'

export const ListOfOrders = ({allOrders, getAllOrders}) => {

    return (
        <>
        {allOrders.map((order) => (<div className='task' key = {order.order_id}>
        <h4>Food: {order.food}</h4>
        <p>Table: {order.table_number}</p>
        <p>{order.cooked === null ? 'N/A' : 'Yes'}</p>
        <FaTrash onClick={()=> {
            axios.delete(`/api/foods/${order.table_number}`, {
                headers: {
                  
                },
                data: {
                  food: order.food
                }
              }).then(() => getAllOrders())
        }}/>
        </div>
        ))}
        </>
      )

}
