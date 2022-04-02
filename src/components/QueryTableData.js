import React from "react";

export const QueryTableData = ({ setState, allFood }) => {
  return (
      <>
    <div>
      <h3>Items at table queried</h3>
      <div>
        {allFood.map((order) => (<p className="task" key={order.order_id}>{order.food}</p>))}
      </div>
      <button
        onClick={() => {
          setState("allorders");
          console.log("INSIDE TABLE DATA")
          console.log(allFood);
        }}
      >
        Show all orders
      </button>
    </div>
    </>
  );
};
