import "./Foodcourt.css";
import axios from "axios";
import React, { useEffect, useState } from "react";

function Foodcourt() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    console.log("Search Term:", searchTerm);
  };

  const apiEndpoint = "http://localhost:3000/foodcourts";
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(apiEndpoint)
      .then((res) => {
        console.log("getting froom", res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);

  return (
    <div>
      <div className="container">
        <div className="food-court">
          <div className="food-court-heading">
            <h3 className="py-2 text-center pe-3">
              <b>Foodcourts near you</b>
            </h3>
          </div>
          <div className="food-court-searchbar">
            <div className="container mt-2">
              <div className="row justify-content-center">
                <div className="col-md-6">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      onClick={handleSearch}
                    >
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="favorate m-3">
            <p>Vavorates </p>
          </div>
          {data.map((data) => {
            return (
              <div className="resturants m-5 ">
                <div className="resturants-1 card">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="resturants-banner">
                        <img src={data.imgUrl} alt="foodcourt" />
                      </div>
                    </div>

                    <div className="col-md-8">
                      <div className="resturants-desc">
                        <h5>
                          <b>{data?.foodTitle}</b>
                        </h5>
                        <p>{data?.location}</p>

                        <p>{data?.deliveryTime}</p>
                        <p>Price: Rs {data?.price}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Foodcourt;
