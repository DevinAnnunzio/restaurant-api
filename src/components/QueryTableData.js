import React from "react";

export const QueryTableData = ({ setState, allFood }) => {
  return (
      <>
    <div>
      <div>
        {allFood.forEach((item) => {
          <div>
            <div className="task" key={item.order_id}>
              <div>item.food</div>
            </div>
          </div>;
        })}
      </div>
      <button
        onClick={() => {
          setState("allorders");
          console.log(allFood);
        }}
      >
        Show all orders
      </button>
    </div>
    </>
  );
};
