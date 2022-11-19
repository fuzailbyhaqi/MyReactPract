import Banner from "../components/Banner";
import BoxArticle from "../components/BoxArticle";
import DashboardFooter from "../components/DashboardFooter";
import DashboardItems from "../components/DashboardItems";
import TextLabel from "../components/TextLabel";
import { itemsHomeArticles } from "../constants/AppConstants";
import { itemsHomeBoxArticle } from "../constants/AppConstants";
import React, { useState, useEffect } from "react";
import apiClient from "../helper/http-common";
import "./Home.css";
import AxiosHelper from "../helper/helper";

const Home = () => {
  /*useEffect(() => {
    getAllData();
  }, []);*/

  const [resData, setResData] = useState([]);
  async function getAllData() {
    try {
      const res = await apiClient.get(
        "/api/FoodCategory/GetAll?pageNo=1&pageSize=1000"
      );

      const result = {
        status: res.status + "-" + res.statusText,
        headers: res.headers,
        data: res.data,
      };

      {
        res.data.result.data.map((res) => {
          return setResData((a) => [...a, ...res.name]), console.log(res.name);
        });
      }
    } catch (err) {
      console.log(err.message);
    }
  }

  const fetch1 = () => {
    fetch(
      "https://api.pkubite.com/api/FoodCategory/GetAll?pageNo=1&pageSize=1000"
    )
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true,
        });
      });
  };

  const axios = require("axios").default;
  const fetchData = () => {
    axios
      .get(
        "https://api.pkubite.com/api/FoodCategory/GetAll?pageNo=1&pageSize=1000"
      )
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  };

  
  const fetchRegions = () => {
    let server = new AxiosHelper(`/region/getAll`)
    server.get().then((res) => {
        const regions = res.data
       // setRegions(regions)
    }).catch((error) => {
        console.log(error)
    })
}

  return (
    <div>
      <div className="container-fluid">
        <button className="buttonHome" onClick={fetchRegions}>
          Get Data
        </button>
        <p>{resData}</p>
        <Banner bannerId="tm-main-bg" />

        <main>
          <section className="tm-welcome">
            <TextLabel name="Welcome to Turkey" />

            <div className="row tm-welcome-row">
              {itemsHomeArticles.map((res) => {
                return <DashboardItems data={res} />;
              })}
              ;
            </div>

            <div className="row tm-welcome-row-2">
              {itemsHomeBoxArticle.map((res) => {
                return <BoxArticle data={res} />;
              })}
              ;
            </div>
          </section>
          <DashboardFooter />
        </main>
      </div>
    </div>
  );
};

export default Home;
