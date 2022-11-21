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
import AxiosHelper from "../helper/helper.ts";
import Constants from "../constants/Constants.ts";
import Login from "../components/Login";
import ListData from "../components/ListData";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    console.log("user: "+loggedInUser.token);
  }, []);

  const [user, setUser] = useState();
  const [catg, setCatg] = useState([]);

  /*useEffect(() => {
    fetchRegions();
  }, []);*/

  const [loading, setLoading] = useState([]);

  //Method 1 to fetch data using axios
  async function getAllData() {
    try {
      const res = await apiClient.get(Constants.GET_ALL_CATEGORIES_PKU);

      const result = {
        status: res.status + "-" + res.statusText,
        headers: res.headers,
        data: res.data,
      };
    } catch (err) {
      console.log(err.message);
    }
  }

  //Default React method to fetch data
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

  //Method 2 to fetch data using axios (Mostly this is used)
  const fetchRegions = () => {
    const pageNO = 1;
    const pageSize = 100;
    setLoading("Loading..");
    setCatg("");
    let server = new AxiosHelper(
      `/api/FoodCategory/GetAll?pageNo=${pageNO}&pageSize=${pageSize}`
    );
    server
      .get()
      .then((res) => {
        const obj = {
          pageType: "home",
          data: res.result.data,
        };
        setCatg(obj);
        setLoading("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const saveLoginFormDataHandler = (enteredFormData) => {
    console.log(enteredFormData.email);
    console.log(enteredFormData.password);
    try {
      let request = new AxiosHelper(Constants.MAPOLITIC_LOGIN);
      let result = request.post(enteredFormData);
      console.log(result);
      if (result.success) {
        console.log("Success "+result);
      }
    } catch (e) {
      console.log(e);
      //  alert(e.message);
    }

    setUser(enteredFormData);
    localStorage.setItem("user", enteredFormData);
  };

  return (
    <div>
      <div className="container-fluid">
        <Login onSaveData={saveLoginFormDataHandler} />
        <button className="buttonHome" onClick={fetchRegions}>
          Get Data
        </button>

        <ListData fData={catg} />
        <p>{loading}</p>

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
