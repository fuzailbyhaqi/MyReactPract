import React, { useState, useEffect } from "react";
import "./Home.css";
import AxiosHelper from "../helper/helper.ts";
import ListData from "../components/ListData";
import { useLocation } from "react-router-dom";

const Products = (props) => {

  const location = useLocation();
  console.log("CatId: "+location.state.catId)
  const categoryId = location.state.catId;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState([]);
  const [pageNO, setPage] = useState(1);

  useEffect(() => {
    console.log("useeffect");
    fetchData();
  }, []);

  const fetchData = () => {
    console.log("Current Page: " + pageNO);
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
        setData(obj);
        setLoading("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

   let nextClickHandler = async (e) => {
    e.preventDefault();
    // pageNO = pageNO + 1;
    //const newPage=pageNO+1
    await setPage(pageNO + 1);
    console.log("Next: " + pageNO);
    await fetchData();
  };

  let prevClickHandler = async (e) => {
    e.preventDefault();
    //  pageNO = pageNO - 1;
    await setPage(pageNO - 1);
    console.log("Prev: " + pageNO);
    await fetchData();
  };

  return (
    <div>
      <div className="container-fluid">
        <button className="buttonHome" onClick={nextClickHandler}>
          Get Data
        </button>
        <button className="btn-next" onClick={prevClickHandler}>
          Prev
        </button>
        <button className="btn-next" onClick={nextClickHandler}>
          Next
        </button>
        <ListData fData={data} />
        <p>{loading}</p>
      </div>
    </div>
  );
};

export default Products;
