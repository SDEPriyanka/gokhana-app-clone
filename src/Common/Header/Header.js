import React from "react";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container">
        <Link to="#" className="navbar-brand">
            <img
              src="https://gokhana.com/wp-content/uploads/2022/04/flaticon-gokhana.png"
              alt=""
              width="30"
              height="28"
              className="d-inline-block align-text-top"
            />
            <b>Go</b>Khana
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" class="nav-link active">
                  
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="foodcourt"  class="nav-link">
                  
                  Foodcourt
                </Link>
              </li>
              <li className="nav-item">
                <Link to="resturant"  class="nav-link">
                  
                  Resturant
                </Link>
              </li>
              <li className="nav-item">
                <Link to="account"  class="nav-link">
                 
                  Account
                </Link>
              </li>
            </ul>
          </div>
 
        </div>
      </nav>
    </div>
  );
};
