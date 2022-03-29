
import React, { useEffect, useState } from "react";
import axios from "axios";
import { ListOfOrders } from "./components/ListOfOrders";
import { PlaceOrder } from "./components/PlaceOrder";

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
    <div>
      {state === "allorders" ? 
      <div><ListOfOrders allOrders={allOrders} getAllOrders={getAllOrders}/>
      <button onClick={()=> setState("placeorder")}>Place order</button></div>
      : <PlaceOrder setState={setState} getAllOrders={getAllOrders}/>}
    </div>
  );
}

export default App;
