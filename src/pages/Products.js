import Banner from "../components/Banner";
import BoxArticle from "../components/BoxArticle";
import DashboardFooter from "../components/DashboardFooter";
import React, { useState } from "react";
import apiClient from "../helper/http-common";
import "./Home.css";
import AxiosHelper from "../helper/helper.ts";
import ListData from "../components/ListData";

const Products = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState([]);
  const fetchData = () => {
    setLoading("Loading..");
    setData([]);
    const pageNO = 1;
    const pageSize = 10;

    let server = new AxiosHelper(
      `/api/FoodDetail/GetAllByCategoryId?foodCategoryId=${1}pageNo=${pageNO}&pageSize=${pageSize}`
    );

    server
      .get()
      .then((res) => {
        console.log(res.result.data);

        const obj = {
          pageType: "product",
          data: res.result.data,
        };
        console.log(obj);
        setData(obj);
        setLoading("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="container-fluid">
        <button className="buttonHome" onClick={fetchData}>
          Get Data
        </button>
        <ListData fData={data} />
        <p>{loading}</p>
      </div>
    </div>
  );
};

export default Products;
