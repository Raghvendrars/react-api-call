import React from "react";
import ImgData from "./Data";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
const Home = () => {
  return (
    <div>
      <div className="comtainer-fluid m-4">
        <div class="jumbotron jumbotron-fluid bg-dark text-white pt-2 pb-2">
          <div class="container">
            <h1 class="display-4">Putatoe Technologies Private Limited</h1>
            <h3 class="">Frontend Developer Task For Internship</h3>
          </div>
        </div>
        <div className="row w-100 mt-4">
          <div className="col">
            <div class="card">
              <img class="card-img-top" src={ImgData[0]} alt="Image One" />
            </div>
          </div>
          <div className="col">
            <div class="card">
              <img class="card-img-top" src={ImgData[1]} alt="Image Two" />
            </div>
          </div>
          <div className="col">
            <div class="card">
              <img class="card-img-top" src={ImgData[2]} alt="Image Three" />
            </div>
          </div>
          <div className="col">
            <div class="card">
              <img class="card-img-top" src={ImgData[3]} alt="Image Four" />
            </div>
          </div>
        </div>
        <div className="row w-100 mt-4">
          <div className="col">
            <div class="card">
              <img class="card-img-top" src={ImgData[4]} alt="Image Five" />
            </div>
          </div>
          <div className="col">
            <div class="card">
              <img class="card-img-top" src={ImgData[5]} alt="Image Six" />
            </div>
          </div>
          <div className="col">
            <div class="card">
              <img class="card-img-top" src={ImgData[6]} alt="Image Seven" />
            </div>
          </div>
          <div className="col">
            <div class="card">
              <img class="card-img-top" src={ImgData[7]} alt="Image Eight" />
            </div>
          </div>
          <div className="col">
            <div class="card">
              <img class="card-img-top" src={ImgData[8]} alt="Image Nine" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
