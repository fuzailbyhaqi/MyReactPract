import "./List.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import React, { useRef } from "react";
const ListData = (props) => {
  const [onSubCat, onSubCatg] = useState("");
  const catg = props.fData.data;
  const clickedItem = (event) => {
    console.log(event.target.id);
    console.log(event.target);
   
  };

  if (props.fData.pageType == "product") {
    return (
      <div>
        <ul className="list-group">
          {catg &&
            catg.length > 0 &&
            catg.map(
             
              (catg, index) => (
               
                console.log(catg),
                (
                  <div className="list">
                 
                    <li
                      className="list-group-item"
                      key={catg.id}
                      onClick={clickedItem}
                      id={catg.id}
                    
                    >
                      <div className="row" id={catg.id}>
                        <img
                          className="image"
                          src={catg.foodImagepath}
                          alt="new"
                          id={catg.id}
                        />
                        <div className="text" id={catg.id}>
                          {catg.fullFoodName}
                        </div>
                      </div>
                    </li>
                  </div>
                )
              )
            )}
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        <ul className="list-group">
          {catg &&
            catg.length > 0 &&
            catg.map(
              (catg, index) => (
                console.log(catg),
                (
                  <div className="list">
                    <li
                       className="list-group-item"
                       key={catg.id}
                       onClick={clickedItem}
                       id={catg.id}
                    >
                      <div className="row" id={catg.id}>
                        <img
                          className="image"
                          src={catg.foodCategoryImagepath}
                          alt="new"
                          id={catg.id}
                        />
                        <div className="text" id={catg.id}>
                          {catg.name}
                        </div>
                      </div>
                    </li>
                  </div>
                )
              )
            )}
        </ul>
      </div>
    );
  }
};

export default ListData;
