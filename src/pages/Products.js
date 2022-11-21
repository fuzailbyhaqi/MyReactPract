import React, { useState, useEffect } from "react";
import "./Home.css";
import AxiosHelper from "../helper/helper.ts";
import ListData from "../components/ListData";
import { useLocation } from "react-router-dom";

const Products = (props) => {
  const location = useLocation();
  const categoryId = location.state.catId;
  console.log("cat" + location.state.catId);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState([]);
  const [pageNO, setPage] = useState(1);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    console.log(pageNO);
    setLoading("Loading..");
    setData([]);
    const pageSize = 3;
    let server = new AxiosHelper(
      `/api/FoodDetail/GetAllByCategoryId?foodCategoryId=${categoryId}&pageNo=${pageNO}&pageSize=${pageSize}`
    );
    server
      .get()
      .then((res) => {
        const obj = {
          pageType: "product",
          data: res.result.data,
        };
        console.log("Results: " + obj);
        setData(obj);
        setLoading("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const nextClickHandler = () => {
    const val = pageNO + 1;
    setPage(val);
    console.log("Next: " + pageNO);
    fetchData();
  };

  const prevClickHandler = () => {
    const val = pageNO - 1;
    setPage(val);
    console.log("Prev: " + pageNO);
    fetchData();
  };

  return (
    <div>
      <div className="container-fluid">
        <button className="buttonHome" onClick={nextClickHandler}>
          Get Data
        </button>
        <ListData fData={data} />
        <p>{loading}</p>

        <button onClick={prevClickHandler}>Prev</button>
        <button className="btn-next" onClick={nextClickHandler}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Products;
