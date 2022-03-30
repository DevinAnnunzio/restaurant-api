
import React, { useEffect, useState } from "react";
import axios from "axios";
import { ListOfOrders } from "./components/ListOfOrders";
import { PlaceOrder } from "./components/PlaceOrder";
import { DeleteByName } from "./components/DeleteByName";
import { QueryItem } from "./components/QueryItem";
import { QueryTable } from "./components/QueryTable";

function App() {
const [allOrders, setAllOrders] = useState([]);
const [state, setState] = useState("allorders");

const getAllOrders = async() => {
  await axios.get("/api/allorders").then((res) => setAllOrders(res.data))
}


useEffect(() => {
  getAllOrders();
},[])

  return (
    <>
            {state === "allorders" ? 
      <div><ListOfOrders allOrders={allOrders} getAllOrders={getAllOrders}/>
      <button onClick={()=> setState("placeorder")}>Place order</button>
      <button onClick={()=> setState("deletebyname")}>Delete food by name</button>
      <button onClick={()=> setState("queryitem")}>Query item for table number</button>
      <button onClick={()=> setState("querytable")}>Query by table number for all items</button>      
      </div> : <div></div>}

      {state === "placeorder"? <PlaceOrder setState={setState} getAllOrders={getAllOrders}/>: <div></div>}
      {state === "deletebyname"? <DeleteByName setState={setState} getAllOrders={getAllOrders}/>: <div></div>}
      {state === "queryitem"? <QueryItem setState={setState} getAllOrders={getAllOrders}/>: <div></div>}
      {state === "querytable"? <QueryTable setState={setState} getAllOrders={getAllOrders}/>: <div></div>}

    </>
  );
}

export default App;
