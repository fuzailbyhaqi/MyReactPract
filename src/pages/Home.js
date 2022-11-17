import Banner from "../components/Banner";
import BoxArticle from "../components/BoxArticle";
import DashboardFooter from "../components/DashboardFooter";
import DashboardItems from "../components/DashboardItems";
import TextLabel from "../components/TextLabel";
import { itemsHomeArticles } from "../constants/AppConstants";
import { itemsHomeBoxArticle } from "../constants/AppConstants";
import React, { useState } from "react";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <div className="container-fluid">
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

          <DashboardFooter/>

        
        </main>
      </div>
    </div>
  );
};

export default Home;
