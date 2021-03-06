import axios from "axios";
import React from "react";
import { useState , useEffect} from "react";
import { QueryTableData } from "./QueryTableData";

export const QueryTable = ({setState}) => {
  const [foodOrderTable, setFoodOrderTable] = useState("");
  const [grabbed, setGrabbed] = useState(false)
  const [allFood, setAllFood] = useState([])

  useEffect(() => {
    // action on update of movies
}, [grabbed]);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!foodOrderTable) {
      alert("Please add a table number to search");
      return;
    }
    //CHANGES HERE
    axios
      .get(`/api/foods/${foodOrderTable}`)
      .then(
        (data) => {
            let tempArr = data.data
            

            // tempArr.forEach((item) => {
            //     allFood.push(item)
            // })
            setAllFood(allFood => ([...allFood, ...tempArr]))
            // let opp = true;
            setGrabbed(true);
        });
  };

  return (
    <div>
        {grabbed === false ? 
        <div>
          <h1>PLACE QUERY ORDER BY TABLE</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label>Table</label>
          <input
            placeholder="Add table number"
            value={foodOrderTable}
            onChange={(e) => setFoodOrderTable(e.target.value)}
          />
        </div>
        <input type="submit" value="Submit Order" />
      </form>
      <button onClick={() => {setState("allorders"); setGrabbed(false)} }>Show all orders</button>    
    </div> : <QueryTableData allFood = {allFood} setState = {setState}/>
    } 
    </div>
  );
};
